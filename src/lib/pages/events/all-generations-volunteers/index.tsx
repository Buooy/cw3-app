'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';

import styles from '@lib/styles/Home.module.css';
import LoginButton from '~/lib/components/auth/LoginButton';

import Claim from './Claim';

const EventAllGenerationsVolunteers = () => {
  const address = useAddress();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        my={5}
        mx={{ base: 0, md: 5 }}
      >
        <Heading
          as="h1"
          size={{ base: 'lg', md: 'xl' }}
          mb={4}
          textAlign="center"
        >
          Thank you for volunteering at CW3: All Generations Conference!
        </Heading>

        <Text textAlign="center" mb={{ base: 3, md: 5 }}>
          You can claim a{' '}
          <strong>
            <i>Proof of Attendance Protocol (POAP) NFT</i>
          </strong>{' '}
          for volunteering at the conference. This NFT will be minted to your
          wallet.
        </Text>
      </Flex>

      {address ? (
        <Claim website="cw3-all-generations-volunteers" eventId={169340} />
      ) : (
        <Flex
          className={styles.connect}
          flexDirection="column"
          w="full"
          justifyContent="center"
        >
          <LoginButton loginText="sign in to mint" />
        </Flex>
      )}
    </Flex>
  );
};

export default EventAllGenerationsVolunteers;
