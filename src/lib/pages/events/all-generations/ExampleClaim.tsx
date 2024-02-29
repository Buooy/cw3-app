import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';

import config from '~/config/config';

import type { PoapData } from './Poap';
import Poap from './Poap';

const ExampleClaim = ({
  website = 'test-cw3',
  eventId = 169321,
}: {
  website?: string;
  eventId?: number;
}) => {
  const [loading, setLoading] = useState(false);
  const address = useAddress();
  const [poap, setPoap] = useState<PoapData | null | undefined>(undefined);

  useEffect(() => {
    const getPoap = async () => {
      const response = await fetch(
        `${config.baseApiUrl}/api/poap/event?address=${address}&eventId=${eventId}`
      );
      const data = (await response.json()) as PoapData;
      setPoap(data.statusCode ? null : data);
    };
    getPoap();
  }, []);

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
      await response.json();
    }
    setLoading(false);
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={5}
    >
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Thank you for participating in CW3: All Generations Conference!
      </Heading>

      <Text textAlign="center" mb={10}>
        You can claim a POAP NFT for attending the conference. This NFT will be
        minted to your wallet and will be available to claim until the end of
        conference.
      </Text>

      {poap === undefined && <Text>Loading</Text>}
      {poap === null && (
        <Button size="lg" colorScheme="teal" onClick={mintToWallet}>
          Mint Your POAP
        </Button>
      )}
      {poap && <Poap poap={poap} />}
    </Flex>
  );
};

export default ExampleClaim;
