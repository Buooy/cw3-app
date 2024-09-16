import { Flex, Image, Show, Hide, Link } from '@chakra-ui/react';

import ProfileButton from '../components/auth/ProfileButton';
import LoginButton from '~/lib/components/auth/LoginButton';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Flex>
        <Hide above="sm">
          <Link href="/">
            <Image
              src="/logo-square.png"
              alt="Christians in Web3"
              fit="contain"
              boxSize="50px"
            />
          </Link>
        </Hide>
        <Show above="sm">
          <Link href="/">
            <Image
              src="/logo-square.png"
              alt="Christians in Web3"
              fit="contain"
              height="50px"
            />
          </Link>
        </Show>
      </Flex>
      <Flex marginLeft="auto" alignItems="center">
        <LoginButton style={{ minWidth: '80px' }} />
        <Flex ml={4}>
          <ProfileButton />
        </Flex>
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
