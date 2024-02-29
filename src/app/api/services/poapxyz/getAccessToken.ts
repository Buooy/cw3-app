const getAccessToken = () => {
  return {
    access_token: process.env.POAP_ACCESS_TOKEN,
    expires_in: 86399,
    scope: 'mint',
    token_type: 'Bearer',
  };
};

export default getAccessToken;
