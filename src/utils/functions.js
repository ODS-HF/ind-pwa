export const setAuthorizationToken = (apiToken) => {
  const headers = {};

  if (apiToken) headers.sessionKey = apiToken;

  return { headers };
};
