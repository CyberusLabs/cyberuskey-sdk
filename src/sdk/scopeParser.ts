export class OpenIdScopeParser {
  private _scope: Array<string>;

  constructor() {
    this._scope = ['openid'];
  }

  public addEmail(): this {
    if (this._scope.includes('email')) {
      return this;
    }

    this._scope.push('email');

    return this;
  }

  public addProfile(): this {
    if (this._scope.includes('profile')) {
      return this;
    }

    this._scope.push('profile');

    return this;
  }

  public getValue(): string {
    return this._scope.join(' ');
  }
}