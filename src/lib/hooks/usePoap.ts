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
      `${config.baseApiUrl}/api/poap/user?address=${address}&eventId=${eventId}`
    );
    const data = (await response.json()) as PoapData;
    return data.statusCode ? null : data;
  };

  const getEventById = async (eventId: string): Promise<PoapEvent> => {
    const response = await fetch(
      `${config.baseApiUrl}/api/poap/events/id/${eventId}`
    );
    return (await response.json()) as PoapEvent;
  };

  /**
   * Mint the POAP to the wallet
   */
  const mintToWallet = async ({
    address,
    websiteOrSecret,
  }: {
    address: string;
    websiteOrSecret: string;
  }) => {
    if (address) {
      const response = await fetch(`${config.baseApiUrl}/api/poap/mint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          website: websiteOrSecret,
        }),
      });
      return response.json();
    }
    return null;
  };

  // Set of returns
  return {
    getEventById,
    getPoap,
    mintToWallet,
  };
};

export default usePoap;
