"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyberusKeyAPI = void 0;
/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
class CyberusKeyAPI {
    /**
     *Creates an instance of CyberusKeyAPI.
     * @param {string} hostUrl Base URL of the host server, e.g. `https://api.cyberuskey.com`
     * @param {GeoProvider} [geoProvider] Geolocalization provider. Use specific implementation like `HTML5GeoProvider`.
     * @param {number} [delayMs=600] Delay (ms) between making an Authentication request and a sound playing.
     * @memberof CyberusKeyAPI
     */
    constructor(hostUrl, geoProvider, delayMs = 600) {
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
    createSession(clientId, origin, geo) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { client_id: clientId };
            if (geo) {
                data['lat'] = geo.latitude;
                data['lng'] = geo.longitude;
            }
            else if (this._geoProvider) {
                const gps = yield this._geoProvider.getGeo();
                if (gps) {
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
        });
    }
    /**
     * Checks if authentication server is available
     *
     * @returns {Promise<boolean>} flag indicating if the authentication server is available.
     * @memberof CyberusKeyAPI
     */
    isOutOfService() {
        return __awaiter(this, void 0, void 0, function* () {
            let errPageMsg = (new URL(document.location.href)).searchParams.get("error");
            if (errPageMsg != null && errPageMsg == "otp_timeout_error") {
                let authActive = sessionStorage.getItem("auth_active");
                if (authActive != null && authActive === "true") {
                    sessionStorage.removeItem("auth_active");
                    let authCounter = sessionStorage.getItem("auth_counter");
                    if (authCounter != null) {
                        let authCounterValue = parseInt(authCounter, 10);
                        if (!isNaN(authCounterValue)) {
                            sessionStorage.setItem("auth_counter", (authCounterValue + 1).toString());
                        }
                    }
                    else {
                        sessionStorage.setItem("auth_counter", "1");
                    }
                }
            }
            else {
                sessionStorage.removeItem("auth_counter");
            }
            const requestOptions = {
                headers: {
                    'Accept': 'application/json'
                }
            };
            return fetch(this._getUrl(`version`), requestOptions)
                .then(response => response.json())
                .then((versionJson) => versionJson.outOfService)
                .catch((err) => {
                return err;
            });
        });
    }
    /**
     * Gets a URL with sound with embedded OTP. You have to emit it.
     *
     * @param {Session} session Cyberus Key's session generated by a user for a login.
     * @returns {Promise<string>} string with url to the sound.
     * @throws ResourceNotFoundError
     * @memberof CyberusKeyAPI
     */
    getOTPSound(session) {
        const type = 'audio/mpeg';
        const requestOptions = {
            headers: {
                'Accept': type,
                'Content-Type': 'text/plain'
            }
        };
        return fetch(this._getUrl(`sessions/${session}`), requestOptions)
            .then((response) => response.arrayBuffer())
            .then((arrayBuffer) => new Blob([arrayBuffer], { type: type }))
            .then((blob) => window.URL.createObjectURL(blob))
            .catch((err) => {
            return err;
        });
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
    getAuthenticationEndpointUrl(sessionId, scope, clientId, redirectUri, state, nonce, responseType = 'code') {
        const data = {
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
    navigateAuthentication(clientId, redirectUri, scope, navigator, session, origin, state, nonce, responseType = 'code') {
        const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);
        sessionStorage.setItem("auth_active", "true");
        return navigator.navigate(authenticateUrl);
    }
    loginThroughCyberusKeyDashboard(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
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
            yield options.navigator.navigate(url.href);
        });
    }
    _getUrl(path) {
        return (new URL(path, this._apiUrl)).href;
    }
    _getUrlEncodedBody(data) {
        return Object.keys(data).reduce((result, key) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(data[key]);
            result.push(`${encodedKey}=${encodedValue}`);
            return result;
        }, []).join("&");
    }
    _timeout(ms) {
        return new Promise((resolve) => {
            return setTimeout(resolve, ms);
        });
    }
}
exports.CyberusKeyAPI = CyberusKeyAPI;
//# sourceMappingURL=api.js.map