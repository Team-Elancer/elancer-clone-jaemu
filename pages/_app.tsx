import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/system';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from 'theme';

import 'public/assets/fonts/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="ko" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <title>이랜서</title>
    </Head>

    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
