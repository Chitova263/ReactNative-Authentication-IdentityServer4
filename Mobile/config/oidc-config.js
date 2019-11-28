export const config = {
    issuer: 'http://localhost:5000',
    clientId: 'native.code',
    redirectUrl: 'io.identityserver.demo:/oauthredirect',
    scopes: ['openid', 'profile', 'offline_access']
  };

export const storage_key = '@IdentityServerOidc:IdentityServerOAuthKey';