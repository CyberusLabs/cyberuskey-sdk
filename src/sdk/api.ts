import { SoundEmitter } from './emitter/soundEmitter';
import { errorFactory, UnknownError } from './errors';
import { Geolocation } from './geoProvider/geo';
import { GeoProvider } from './geoProvider/geoProvider';
import { Navigator } from './navigator/navigator';
import { OpenIdScopeParser } from './scopeParser';
import { Session } from './session';


/**
 * Cyberus Key API which allows you to do a delegate login with OpenId protocol.
 *
 * @class CyberusKeyAPI
 */
export class CyberusKeyAPI {
  private _apiUrl: URL;
  private _geoProvider: GeoProvider;
  private _cachedGeo: Geolocation;
  private _delayMs: number;

  /**
   *Creates an instance of CyberusKeyAPI.
   * @param {string} hostUrl Base URL of the host server, e.g. `https://production-api.cyberuskey.com`
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
   * @throws WrongJsonError, OpenApiError, ResourceNotFoundError, OTPGenerationError, UnknownError
   * @returns {Promise<Session>} The Cyberus Key session.
   * @memberof CyberusKeyAPI
   */
  public async createSession(clientId: string, geo?: Geolocation): Promise<Session> {
    const data = { client_id: clientId };

    if (geo) {
      data['lat'] = geo.latitude;
      data['lng'] = geo.longitude;
    }

    const response = await fetch(this._getUrl('sessions'), {
      method: 'POST',
      body: this._getUrlEncodedBody(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const json = await response.json();

    if (response.ok && response.status === 201 && json.success) {
      return new Session(json.data);
    }

    if (!json.error) {
      throw new UnknownError()
    }

    throw errorFactory(json.error, json.error_description);
  }

  /**
   * Gets a sonic sound with embedded OTP.
   *
   * @param {Session} session Cyberus Key's session generated by a user for a login.
   * @returns {Promise<ArrayBuffer>} Bytes of a sound.
   * @throws ResourceNotFoundError
   * @memberof CyberusKeyAPI
   */
  public async getOTPSound(session: Session): Promise<ArrayBuffer> {
    const response = await fetch(this._getUrl(`sessions/${session.sessionId}`), {
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'text/plain'
      }
    });
    // @ts-ignore
    const buffer: Function = response.buffer || response.arrayBuffer;
    return await buffer.call(response);
  }


  /**
   * Gets OpenID's Authentication endpoint URL which will be used to process the authentication.
   *
   * @param {Session} session Cyberus Key session.
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
  public getAuthenticationEndpointUrl(session: Session, scope: OpenIdScopeParser, clientId: string, redirectUri: string, state?: string, nonce?: string, responseType = 'code'): string {
    const data: any = {
      session_id: session.sessionId,
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
   * Makes an authentication with Cyberus Key. 
   *
   * @param {string} clientId Public client ID generated during creating the account.
   * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
   * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
   *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
   * @param {SoundEmitter} soundEmitter Interface which can play a sound.
   * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
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
  public async authenticate(clientId: string, redirectUri: string, scope: OpenIdScopeParser, soundEmitter: SoundEmitter, navigator: Navigator, state?: string, nonce?: string, responseType = 'code'): Promise<void> {
    if (this._geoProvider && !this._cachedGeo) {
      this._cachedGeo = await this._geoProvider.getGeo();
    }

    const session = await this.createSession(clientId, this._cachedGeo);
    const sound = await this.getOTPSound(session);

    const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);

    console.info(`Navigating to ${authenticateUrl}.`);

    await navigator.navigate(authenticateUrl);

    await this._timeout(1000);

    console.info(`Sound emitting.`)

    await soundEmitter.emit(sound);
  }

  /**
   * Navigates to Authentication Endpoint and returns a sound. You have to emit it.
   *
   * @param {string} clientId Public client ID generated during creating the account.
   * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
   * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
   *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
   * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
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
  public async navigateAndGetTheSound(clientId: string, redirectUri: string, scope: OpenIdScopeParser, navigator: Navigator, state?: string, nonce?: string, responseType = 'code'): Promise<ArrayBuffer> {
    if (this._geoProvider && !this._cachedGeo) {
      this._cachedGeo = await this._geoProvider.getGeo();
    }

    const session = await this.createSession(clientId, this._cachedGeo);
    const sound = await this.getOTPSound(session);

    const authenticateUrl = this.getAuthenticationEndpointUrl(session, scope, clientId, redirectUri, state, nonce, responseType);

    console.info(`Navigating to ${authenticateUrl}.`);

    await navigator.navigate(authenticateUrl);

    await this._timeout(this._delayMs);

    return sound;
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
}
