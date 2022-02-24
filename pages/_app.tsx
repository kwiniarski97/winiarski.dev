import { Layout } from 'components/Layout';
import { ThemeProvider } from 'features/themes/ThemeProvider';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
