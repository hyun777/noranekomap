import '../reset.css';
import type { AppProps } from 'next/app';
import wrapper from '../src/store/modules/rootReducer';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
