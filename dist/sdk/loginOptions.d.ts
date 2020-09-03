import { Navigator } from './navigator/navigator';
import { OpenIdScopeParser } from './scopeParser';
/**
 * Login options.
 *
 * @export
 * @class LoginOptions
 */
export declare class LoginOptions {
    /**
     * @param {string} clientId Public client ID generated during creating the account.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly clientId: string;
    /**
     * @param {string} redirectUri Redirect URI to which the response will be sent. If the value is not whitelisted then the request will fail.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly redirectUri: string;
    /**
     * @param {OpenIdScopeParser} scope Each scope returns a set of user attributes, which are called claims.
     *    Once the user authorizes the requested scopes, the claims are returned in an ID Token.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly scope: OpenIdScopeParser;
    /**
    * @param {Navigator} navigator Class describes an action that will be done to Authentication URL. For browsers it will be a page redirection.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly navigator: Navigator;
    /**
     * @param {string} [origin] The origin domain of the request being made. If `null` then the Referer header will be used.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly origin: string;
    /**
     * @param {string} [state]
     *    RECOMMENDED. Opaque value used to maintain state between the request and the callback. Typically, CSRF, XSRF mitigation is done by cryptographically binding the value of this parameter with a browser cookie.
     *    The state parameter preserves some state object set by the client in the Authentication request and makes it available to the client in the response.
     *    It’s that unique and non-guessable value that allows you to prevent the attack by confirming if the value coming from the response matches the one you expect (the one you generated when initiating the request).
     *    The state parameter is a string so you can encode any other information in it.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly state: string;
    /**
     * @param {string} [nonce]
     *    String value used to associate a Client session with an ID Token, and to mitigate replay attacks.
     *    The value is passed through unmodified from the Authentication Request to the ID Token.
     *    Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly nonce: string;
    /**
     * @param {string} [responseType='code'] OpenId response type. The default is `code` (Code Flow, involving the front-channel and backchannel).
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly responseType: string;
    /**
     * @param {string} display It specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User.
     *   Default and the only supported value is `page`.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly display: string;
    /**
     * @param {string} prompt Space delimited, case sensitive list of string values that specifies whether the Authorization Server
     *   prompts the End-User for reauthentication and consent. The defined values are: `login`, `none`.
     *   Default is `login,none`. Can't be changed for now.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly prompt: string;
    /**
     * Theme of the login page of Cyberus Key Dashboard. Default is `default`.
     *
     * @type {string}
     * @memberof LoginOptions
     */
    readonly theme: string;
}
