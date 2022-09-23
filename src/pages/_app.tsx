// src/pages/_app.tsx
import type { NextComponentType, NextPage } from 'next';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import superjson from 'superjson';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';


import 'src/styles/globals.css';

import type { AppRouter } from 'src/server/router';
import Theme from 'src/styles/theme';

import { RouterTransition } from 'src/components/RouterTransition';
import useColorMode from 'src/hooks/useColorMode';
import { AuthProvider } from 'src/context/auth';
import { NotificationsProvider } from '@mantine/notifications';

type getLayout = (page: React.ReactElement) => React.ReactNode;

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: getLayout
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout: getLayout = Component.getLayout ?? ((page) => page);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ColorSchemeProvider colorScheme={colorMode} toggleColorScheme={toggleColorMode}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...Theme, colorScheme: colorMode }}
      >
        <NotificationsProvider>
          <ModalsProvider>
            <AuthProvider>
              <RouterTransition />
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp as NextComponentType);
