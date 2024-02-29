import { Flex, Image, Show, Hide } from '@chakra-ui/react';

import LoginButton from '~/lib/components/auth/LoginButton';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Flex>
        <Hide above="sm">
          <Image
            src="/logo-square.png"
            alt="Christians in Web3"
            fit="contain"
            boxSize="50px"
          />
        </Hide>
        <Show above="sm">
          <Image
            src="/logo.png"
            alt="Christians in Web3"
            fit="contain"
            height="30px"
          />
        </Show>
      </Flex>
      <Flex marginLeft="auto" alignItems="center">
        <LoginButton style={{ minWidth: '80px' }} />
        <Show above="sm">
          <Flex ml={4}>
            <ThemeToggle />
          </Flex>
        </Show>
      </Flex>
    </Flex>
  );
};

export default Header;
