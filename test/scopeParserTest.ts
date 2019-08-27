import { expect } from 'chai';
import { OpenIdScopeParser } from '../src/sdk/scopeParser';


describe('ScopeParser', () => {
  it('should allow for adding specific scopes', async () => {
    const scopeParser = new OpenIdScopeParser();

    expect(scopeParser.getValue()).to.equal('openid');

    scopeParser.addEmail();

    expect(scopeParser.getValue()).to.equal('openid email');

    scopeParser.addEmail().addEmail().addEmail();

    expect(scopeParser.getValue()).to.equal('openid email');

    scopeParser.addProfile();

    expect(scopeParser.getValue()).to.equal('openid email profile');

    scopeParser.addProfile().addProfile().addEmail();

    expect(scopeParser.getValue()).to.equal('openid email profile');
  });
});