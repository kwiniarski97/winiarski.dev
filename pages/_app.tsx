import { Layout } from 'components/Layout';
import { GlobalLoadingProvider } from 'features/loading/GlobalLoadingProvider';
import { ThemeProvider } from 'features/themes/ThemeProvider';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalLoadingProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalLoadingProvider>
    </ThemeProvider>
  );
}

export default MyApp;
