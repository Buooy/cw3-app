'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';

import ExampleClaim from '../events/all-generations/ExampleClaim';
import LoginButton from '~/lib/components/auth/LoginButton';

const Home = () => {
  const address = useAddress();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="750px"
      mx="auto"
    >
      <Flex mt={10}>
        {address ? (
          <ExampleClaim website="test-cw3" eventId={169321} />
        ) : (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Heading as="h1" size="2xl" mb={4} textAlign="center">
              Christians in Web3
            </Heading>
            <Text fontSize="lg" mb={10}>
              Equipping all generations with innovative technologies to love our
              neighbors and build a better world{' '}
            </Text>
            <LoginButton
              style={{ minWidth: '400px' }}
              loginText="Sign In to Continue"
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
