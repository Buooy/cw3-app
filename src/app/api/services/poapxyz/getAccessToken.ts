import { kv } from '@vercel/kv';

import config from '~/config/config';

const generateNewAccessToken = async () => {
  const response = await fetch('https://auth.accounts.poap.xyz/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      audience: 'https://api.poap.tech',
      grant_type: 'client_credentials',
      client_id: config.poapClientId,
      client_secret: config.poapClientSecret,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate new access token');
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
};

const getAccessToken = async () => {
  const poapAccessToken = await kv.get<string>('poapAccessToken');

  if (!poapAccessToken) {
    const newAccessToken = await generateNewAccessToken();
    await kv.set('poapAccessToken', newAccessToken, { ex: 12 * 60 * 60 });
    return newAccessToken;
  }

  return poapAccessToken;
};

export default getAccessToken;
