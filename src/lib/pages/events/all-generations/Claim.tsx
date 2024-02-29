import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';

import config from '~/config/config';

import type { PoapData } from './Poap';
import Poap from './Poap';

const Claim = ({ website, eventId }: { website: string; eventId: number }) => {
  const [loading, setLoading] = useState(false);
  const address = useAddress();
  const [poap, setPoap] = useState<PoapData | null | undefined>(undefined);

  const getPoap = async () => {
    const response = await fetch(
      `${config.baseApiUrl}/api/poap/event?address=${address}&eventId=${eventId}`
    );
    const data = (await response.json()) as PoapData;
    setPoap(data.statusCode ? null : data);
  };

  const mintToWallet = async () => {
    setLoading(true);
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

      let interval;
      let retries = 20;

      while (poap === null && retries > 0) {
        await new Promise((r) => setTimeout(r, 8000));
        await getPoap();
        if (poap) clearInterval(interval);

        retries -= 1;
      }

      clearInterval(interval);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPoap();
  }, []);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      {poap === undefined && <Text>Loading...</Text>}
      {poap === null && (
        <Flex flexDirection="column" textAlign="center">
          <Button
            size="lg"
            colorScheme="teal"
            onClick={mintToWallet}
            isLoading={loading}
            loadingText="Minting in Progress...."
          >
            Mint Your POAP
          </Button>
          {loading && (
            <Text mt={2} fontSize="xs">
              This could take up to 1 minute.
              <br />
              If you do not see it, please refresh the page in a couple of
              minutes
            </Text>
          )}
        </Flex>
      )}
      {poap && <Poap poap={poap} />}
    </Flex>
  );
};

export default Claim;
