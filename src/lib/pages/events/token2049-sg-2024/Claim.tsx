import { Button, Flex, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';

import usePoap from '~/lib/hooks/usePoap';

import Poap from './Poap';

const Claim = ({ id, secret }: { id: number; secret: string }) => {
  const [loading, setLoading] = useState(false);
  const address = useAddress();
  const [poap, setPoap] = useState<PoapData | null | undefined>(undefined);
  const { getEventById, getPoap, mintToWallet } = usePoap();

  const fetchPoap = async () => {
    if (address) {
      const response = await getPoap({
        address,
        eventId: id,
      });
      setPoap(response);
    }
  };

  const mint = async () => {
    setLoading(true);
    if (address) {
      await mintToWallet({ address, websiteOrSecret: secret });

      let interval;
      let retries = 20;

      while (poap === null && retries > 0) {
        await new Promise((r) => setTimeout(r, 8000));
        await fetchPoap();
        if (poap) clearInterval(interval);

        retries -= 1;
      }

      clearInterval(interval);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPoap();
  }, []);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      {poap === undefined && <Text>Loading...</Text>}
      {poap === null && (
        <Flex flexDirection="column" textAlign="center">
          <Button
            size="lg"
            colorScheme="teal"
            onClick={mint}
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
