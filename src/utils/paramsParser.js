export const parseAuthParams = () => {
  const params = new URLSearchParams(window.location.hash);

  return {
      accessToken: params.get('#access_token'),
      tokenType: params.get('token_type'),
      expiresIn: params.get('expires_in')
    };
}

export const validAuth = (auth) => {
  return auth.accessToken && auth.tokenType && auth.expiresIn
}