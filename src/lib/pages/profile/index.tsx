'use client';

import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  WrapItem,
} from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

async function getPoaps({ address }: { address: string }) {
  if (!ethers.utils.isAddress(address)) {
    return [];
  }

  const response = await fetch(`/api/poap/${address}`, {
    cache: 'no-store',
  });
  return response.json();
}

const Profile = () => {
  const [poaps, setPoaps] = useState<PoapData[]>([]);
  const { address }: { address: string } = useParams();

  useEffect(() => {
    const fetchPoaps = async () => {
      if (address) {
        const response: PoapData[] = await getPoaps({ address });
        setPoaps(response);
      }
    };
    fetchPoaps();
  }, [address]);

  return (
    <Flex flexDirection="column" width="full">
      <Heading fontSize="3xl" mb={10} textAlign="center">
        Events Attended
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {poaps.map((poap: PoapData) => {
          if (poap.event.name.toLowerCase().includes('test')) return null;
          return (
            <GridItem
              key={poap.event.id}
              flexDirection="column"
              textAlign="center"
            >
              <Avatar
                border="3px solid white"
                size="2xl"
                mb={4}
                name={poap.event.name}
                src={poap.event.image_url}
              />
              <Text fontSize="lg" fontWeight="semibold">
                {poap.event.name}
              </Text>

              <Text fontSize="sm">{poap.event.start_date}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Profile;
