/* eslint-disable @typescript-eslint/no-explicit-any */
import { useColorMode } from '@chakra-ui/react';
import { ConnectWallet } from '@thirdweb-dev/react';

const LoginButton = ({
  style,
  loginText,
}: {
  style?: Record<string, any>;
  loginText?: string;
}) => {
  const { colorMode } = useColorMode();

  return (
    <ConnectWallet
      style={style}
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      btnTitle={loginText ?? 'Sign In'}
    />
  );
};

export default LoginButton;
