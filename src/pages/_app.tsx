import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';

import { Header } from '../components/Header';

import 'antd/dist/antd.css';
import '../styles/global.scss';
import 'nprogress/nprogress.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
