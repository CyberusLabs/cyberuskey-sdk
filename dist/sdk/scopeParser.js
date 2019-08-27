"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpenIdScopeParser {
    constructor() {
        this._scope = ['openid'];
    }
    addEmail() {
        if (this._scope.includes('email')) {
            return this;
        }
        this._scope.push('email');
        return this;
    }
    addProfile() {
        if (this._scope.includes('profile')) {
            return this;
        }
        this._scope.push('profile');
        return this;
    }
    getValue() {
        return this._scope.join(' ');
    }
}
exports.OpenIdScopeParser = OpenIdScopeParser;
//# sourceMappingURL=scopeParser.js.map