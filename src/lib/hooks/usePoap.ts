import type { PoapData } from '../pages/events/all-generations/Poap';
import config from '~/config/config';

const usePoap = () => {
  /**
   * Gets the POAP data for the address and event id
   */
  const getPoap = async ({
    address,
    eventId,
  }: {
    address: string;
    eventId: number;
  }) => {
    const response = await fetch(
      `${config.baseApiUrl}/api/poap/event?address=${address}&eventId=${eventId}`
    );
    const data = (await response.json()) as PoapData;
    return data.statusCode ? null : data;
  };

  /**
   * Mint the POAP to the wallet
   */
  const mintToWallet = async ({
    address,
    website,
  }: {
    address: string;
    website: string;
  }) => {
    if (address) {
      const response = await fetch(`${config.baseApiUrl}/api/poap/mint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          website,
        }),
      });
      return response.json();
    }
    return null;
  };

  // Set of returns
  return {
    getPoap,
    mintToWallet,
  };
};

export default usePoap;
