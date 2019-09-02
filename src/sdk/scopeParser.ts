
/**
 * Handy class to define an OpenID's scope.
 * Scopes are used by an application during authentication to authorize access to a user's details,
 * like name and picture. Each scope returns a set of user attributes, which are called claims. 
 * 
 * You can use additional values `email` (add a user's email claim) and `profile` (add user first and last name).
 * 
 * ```javascript
 * const scopeParser = new OpenIdScopeParser();
 * const scope = scopeParser.addEmail().addProfile().getValue();
 * ```
 *
 * @export
 * @class OpenIdScopeParser
 */
export class OpenIdScopeParser {
  private _scope: Array<string>;

  constructor() {
    this._scope = ['openid'];
  }

  /**
   * Adds `email` scope.
   *
   * @returns {this}
   * @memberof OpenIdScopeParser
   */
  public addEmail(): this {
    if (this._scope.includes('email')) {
      return this;
    }

    this._scope.push('email');

    return this;
  }

  /**
   * Adds `profile` scope.
   *
   * @returns {this}
   * @memberof OpenIdScopeParser
   */
  public addProfile(): this {
    if (this._scope.includes('profile')) {
      return this;
    }

    this._scope.push('profile');

    return this;
  }

  /**
   * Gets formatted scope value, e.g. `openid email`.
   *
   * @returns {string}
   * @memberof OpenIdScopeParser
   */
  public getValue(): string {
    return this._scope.join(' ');
  }
}