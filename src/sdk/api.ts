import {Geolocation} from './geoProvider/geo';
import {GeoProvider} from './geoProvider/geoProvider';
import {Navigator} from './navigator/navigator';
import {OpenIdScopeParser} from './scopeParser';
import {Session} from './session';
import {LoginOptions} from './loginOptions';


/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
export class CyberusKeyAPI {
    private _apiUrl: URL;
    private _geoProvider: GeoProvider;
    private _delayMs: number;
    private backgroundAudioBuffer?: AudioBuffer;
    private backgroundAudioPromise?: Promise<void>;

    /**
     *Creates an instance of CyberusKeyAPI.
     * @param {string} hostUrl Base URL of the host server, e.g. `https://api.cyberuskey.com`
     * @param {GeoProvider} [geoProvider] Geolocalization provider. Use specific implementation like `HTML5GeoProvider`.
     * @param {number} [delayMs=600] Delay (ms) between making an Authentication request and a sound playing.
     * @memberof CyberusKeyAPI
     */
    constructor(hostUrl: string, geoProvider?: GeoProvider, delayMs: number = 600) {
        this._apiUrl = new URL('/api/v2/', hostUrl);
        this._geoProvider = geoProvider;
        this._delayMs = delayMs;
    }

    /**
     * Creates the Cyberus Key session.
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {Geolocation} [geo] Give a value if you want to pass optional geolocation measurement.
     *    It can be later use to compare it against the mobile's measurement (if you have set `fail_on_geo_mismatch`).
     *    Those measurements can be used also to general improvement of the security.
     * @param {string} [origin] The origin domain of the request being made. If `null` then the Referer header will be used.
     * @throws WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, UnknownError
     * @returns {Promise<string>} The Cyberus Key session id.
     * @memberof CyberusKeyAPI
     */
    public async createSession(clientId: string, origin?: string, geo?: Geolocation): Promise<string> {

        const data = {client_id: clientId};

        if (geo) {
            data['lat'] = geo.latitude;
            data['lng'] = geo.longitude;
        } else if(this._geoProvider){
            const gps = await this._geoProvider.getGeo();
            if (gps){
                data['lat'] = gps.latitude;
                data['lng'] = gps.longitude;
            }
        }

        if (origin) {
            data['origin'] = origin;
        }

        const params = {
            method: 'POST',
            body: this._getUrlEncodedBody(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return fetch(this._getUrl('sessions'), params)
            .then((response) => response.json())
            .then((json) => json.data.session_id);
    }

    /**
     * Checks if authentication server is available
     *
     * @returns {Promise<boolean>} flag indicating if the authentication server is available.
     * @memberof CyberusKeyAPI
     */


    public async isOutOfService(): Promise<boolean> {

        let errPageMsg = (new URL(document.location.href)).searchParams.get("error");

        if (errPageMsg !=null && errPageMsg == "otp_timeout_error"){
            let authActive = sessionStorage.getItem("auth_active");
            if (authActive !=null && authActive === "true"){
                sessionStorage.removeItem("auth_active");
                let authCounter = sessionStorage.getItem("auth_counter");
                if (authCounter!=null){
                    let authCounterValue = parseInt(authCounter, 10)
                    if (!isNaN(authCounterValue)){
                        sessionStorage.setItem("auth_counter", (authCounterValue + 1).toString());
                    }
                }else{
                    sessionStorage.setItem("auth_counter", "1");
                }
            }
        }
        else{
            sessionStorage.removeItem("auth_counter");
        }

        this.preloadBackgroundAudio()

        interface VersionResponse {
            version: string;
            minMobileVersion: string;
            maxMobileVersion: string;
            outOfService: boolean;
        }

        const requestOptions = {
            headers: {
                'Accept': 'application/json'
            }
        };

        return fetch(this._getUrl(`version`), requestOptions)
            .then(response => response.json())
            .then((versionJson: VersionResponse) => versionJson.outOfService)
            .catch((err) => {
                return err;
            });

    }



    public preloadBackgroundAudio(): void {
        if (!this.backgroundAudioPromise) {
            this.backgroundAudioPromise = (async () => {
                const url = 'https://staticaudio.azureedge.net/static/Piano_FSK_1a_long.wav';
                const res = await fetch(url);
                const buffer = await res.arrayBuffer();

                const ctx = new AudioContext();
                this.backgroundAudioBuffer = await ctx.decodeAudioData(buffer);
            })();
        }
    }



    /**
     * Gets a URL with sound with embedded OTP. You have to emit it.
     *
     * @param {Session} session Cyberus Key's session generated by a user for a login.
     * @returns {Promise<string>} string with url to the sound.
     * @throws ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */


    public getOTPSound(session: string): Promise<string> {
        const type = 'audio/mpeg';
        const requestOptions = {
            headers: {
                'Accept': type,
                'Content-Type': 'text/plain'
            }
        };

        return fetch(this._getUrl(`sessions/${session}`), requestOptions)
            .then((response) => response.arrayBuffer())
            .then((arrayBuffer) => new Blob([arrayBuffer], {type: type}))
            .then((blob) => window.URL.createObjectURL(blob))
            .catch((err) => {
                return err;
            });

    }


    public async getOTPSoundBackground(session: string): Promise<{ otpUrl: string; pianoUrl: string }> {
        const otpUrl = this._getUrl(`sessions/${session}?otp_only=true`);
        const audioContext = new AudioContext();

        try {
            if (this.backgroundAudioPromise) {
                await this.backgroundAudioPromise;
            }

            if (!this.backgroundAudioBuffer) {
                throw new Error('Background audio is not loaded.');
            }

            const otpResponse = await fetch(otpUrl);
            const otpArrayBuffer = await otpResponse.arrayBuffer();
            const otpBuffer = await audioContext.decodeAudioData(otpArrayBuffer);

            const silenceDuration = 0.5;
            const totalPlays = 10;
            const otpDuration = otpBuffer.duration;
            const totalDuration = totalPlays * (otpDuration + silenceDuration);

            const otpSequence = audioContext.createBuffer(
                otpBuffer.numberOfChannels,
                totalDuration * audioContext.sampleRate,
                audioContext.sampleRate
            );

            for (let i = 0; i < totalPlays; i++) {
                const startSample = Math.floor(i * (otpDuration + silenceDuration) * audioContext.sampleRate);
                for (let channel = 0; channel < otpBuffer.numberOfChannels; channel++) {
                    const from = otpBuffer.getChannelData(channel);
                    const to = otpSequence.getChannelData(channel);
                    to.set(from, startSample);
                }
            }

            // Create OTP blob
            const otpWavBuffer = this._encodeWav(otpSequence, audioContext.sampleRate);
            const otpBlob = new Blob([otpWavBuffer], { type: 'audio/wav' });
            const otpBlobUrl = URL.createObjectURL(otpBlob);

            // Create Piano blob
            const pianoWavBuffer = this._encodeWav(this.backgroundAudioBuffer, audioContext.sampleRate);
            const pianoBlob = new Blob([pianoWavBuffer], { type: 'audio/wav' });
            const pianoBlobUrl = URL.createObjectURL(pianoBlob);

            return {
                otpUrl: otpBlobUrl,
                pianoUrl: pianoBlobUrl
            };

        } catch (err) {
            console.error('Audio processing failed:', err);
            return Promise.resolve({ otpUrl: '', pianoUrl: '' });
        }
    }



    /**
     * Gets OpenID's Authentication endpoint URL which will be used to process the authentication.
     *
     * @param sessionId unique id created for the specific login and connected to the specific otp
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
     * @returns OpenID's Authentication endpoint URL
     * @throws InvalidRedirectUriError, InvalidClientError, ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    public getAuthenticationEndpointUrl(sessionId: string, scope: OpenIdScopeParser, clientId: string, redirectUri: string, state?: string, nonce?: string, responseType = 'code'): string {
        const data: any = {
            session_id: sessionId,
            client_id: clientId,
            scope: scope.getValue(),
            redirect_uri: redirectUri,
            response_type: responseType
        };

        if (state) {
            data['state'] = state;
        }
        if (nonce) {
            data['nonce'] = nonce;
        }

        const url = new URL(this._getUrl('authenticate'));

        Object.keys(data).forEach((parameterName) => {
            url.searchParams.append(parameterName, data[parameterName]);
        });

        return url.href;
    }


    /**
     * Navigates to Authentication Endpoint
     *
     * @param {string} clientId Public client ID generated during creating the account.
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
     * @param session Session id
     * @param {string} [origin] The origin domain of the request being made. If `null` then the Referer header will be used.
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
     * @returns {Promise<void>}
     * @memberof CyberusKeyAPI
     */
    public navigateAuthentication(clientId: string, redirectUri: string, scope: OpenIdScopeParser, navigator: Navigator, session: string, origin?: string, state?: string, nonce?: string, responseType = 'code') {
        const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);
        sessionStorage.setItem("auth_active", "true");
        return navigator.navigate(authenticateUrl);
    }

    public async loginThroughCyberusKeyDashboard(options: LoginOptions): Promise<void> {
        const data: any = {
            client_id: options.clientId,
            scope: options.scope.getValue(),
            redirect_uri: options.redirectUri,
            response_type: options.responseType,
            state: options.state,
            nonce: options.nonce,
            display: options.display || 'page',
            prompt: options.prompt,
            theme: options.theme,
        };

        if (options.state) {
            data['state'] = options.state;
        }

        if (options.nonce) {
            data['nonce'] = options.nonce;
        }

        const url = new URL(this._getUrl('authenticate'));

        Object.keys(data).forEach((parameterName) => {
            url.searchParams.append(parameterName, data[parameterName]);
        });

        await options.navigator.navigate(url.href);
    }

    private _getUrl(path: string): string {
        return (new URL(path, this._apiUrl)).href;
    }

    private _getUrlEncodedBody(data: any): string {
        return Object.keys(data).reduce<string[]>((result: string[], key: string) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(data[key]);

            result.push(`${encodedKey}=${encodedValue}`);

            return result;
        }, []).join("&")
    }

    private _timeout(ms: number): Promise<number> {
        return new Promise((resolve) => {
            return setTimeout(resolve, ms);
        });
    }


    private _encodeWav(buffer: AudioBuffer, sampleRate: number): ArrayBuffer {
        const numChannels = buffer.numberOfChannels;
        const length = buffer.length * numChannels * 2;
        const output = new ArrayBuffer(44 + length);
        const view = new DataView(output);

        const writeString = (offset: number, str: string) => {
            for (let i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i));
            }
        };

        const floatTo16BitPCM = (output: DataView, offset: number, input: Float32Array) => {
            for (let i = 0; i < input.length; i++, offset += 2) {
                const s = Math.max(-1, Math.min(1, input[i]));
                output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            }
        };

        writeString(0, 'RIFF');
        view.setUint32(4, 36 + length, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true); // PCM
        view.setUint16(20, 1, true);  // PCM format
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * numChannels * 2, true);
        view.setUint16(32, numChannels * 2, true);
        view.setUint16(34, 16, true); // bits per sample
        writeString(36, 'data');
        view.setUint32(40, length, true);

        let offset = 44;
        const channels = [];
        for (let i = 0; i < numChannels; i++) {
            channels.push(buffer.getChannelData(i));
        }

        for (let i = 0; i < buffer.length; i++) {
            for (let channel = 0; channel < numChannels; channel++) {
                floatTo16BitPCM(view, offset, new Float32Array([channels[channel][i]]));
                offset += 2;
            }
        }

        return output;
    }


}
