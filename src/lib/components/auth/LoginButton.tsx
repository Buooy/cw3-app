import { useColorMode } from '@chakra-ui/react';
import { ConnectWallet } from '@thirdweb-dev/react';

const LoginButton = () => {
  const { colorMode } = useColorMode();

  return (
    <ConnectWallet
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      btnTitle="Sign In"
    />
  );
};

export default LoginButton;
