'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import {
  ThirdwebProvider,
  embeddedWallet,
  coinbaseWallet,
  metamaskWallet,
  phantomWallet,
  trustWallet,
  walletConnect,
} from '@thirdweb-dev/react';
import { WagmiProvider } from 'wagmi';

import { activeChain } from '@config/constants';
import { config } from '@config/wagmi.config';
import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ThirdwebProvider
          clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
          activeChain={activeChain}
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            trustWallet(),
            phantomWallet(),
            /*
            smartWallet(embeddedWallet(), {
              factoryAddress,
              gasless: true,
            }),
            */
            embeddedWallet(),
          ]}
        >
          <WagmiProvider config={config}>{children}</WagmiProvider>
        </ThirdwebProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
