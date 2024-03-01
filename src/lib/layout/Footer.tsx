import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        &copy;{' '}
        <a href="https://cw3.global" target="_blank" rel="noreferrer">
          Christians in Web3
        </a>{' '}
        - {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
