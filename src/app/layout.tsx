import type { Metadata, Viewport } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Christians in Web3';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Christians in Web3' },
  description: 'Uniting Believers in Web3',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://app.cw3.global',
    title: 'Christians in Web3',
    description: 'Uniting Believers in Web3',
    /*
    images: {
      url: 'https://og-image.cw3.global/**CW3**.cw3.global.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcw3.global%2Favataaars.svg&widths=250',
      alt: 'Christians in Web3',
    },
    */
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
