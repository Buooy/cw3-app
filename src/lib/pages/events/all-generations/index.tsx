'use client';

import { Flex } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';

import styles from '@lib/styles/Home.module.css';
import LoginButton from '~/lib/components/auth/LoginButton';

import ExampleClaim from './ExampleClaim';

const EventAllGenerations = () => {
  const address = useAddress();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      <ExampleClaim />
      {!address && (
        <Flex
          className={styles.connect}
          flexDirection="column"
          w="full"
          justifyContent="center"
        >
          <LoginButton />
        </Flex>
      )}
    </Flex>
  );
};

export default EventAllGenerations;
