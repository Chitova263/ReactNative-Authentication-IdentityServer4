import { AppAuth } from 'expo';

export const OIDC_CONFIG = {
    issuer: "http://localhost:5000",
    clientId: 'native.code',
    scopes: ['profile', 'openid', 'offline_access'],
    redirectUrl: `${AppAuth.OAuthRedirect}:/oauthredirect`
}

export const STORAGE_KEY = '@IdentityServerOidc:IdentityServerOAuthKey';