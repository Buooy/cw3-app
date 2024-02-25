import { Flex, Image } from '@chakra-ui/react';

import LoginButton from '~/lib/components/auth/LoginButton';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Flex>
        <Image
          src="/logo.png"
          alt="Christians in Web3"
          width={310}
          height={30}
        />
      </Flex>
      <Flex marginLeft="auto" alignItems="center">
        <LoginButton />
        <Flex ml={4}>
          <ThemeToggle />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
