export const setAuthorizationToken = (apiToken) => {
  const headers = {};

  if (apiToken) headers.sessionKey = apiToken;

  return { headers };
};

export const truncate = (string, length) => {
  return string?.length > length ? string?.slice(0, length) + "..." : string;
};

export const formatString = (string) => {
  return string?.replace("[", "").replace("]", "");
};
