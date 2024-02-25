import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        &copy; Christians in Web3 - {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
