import '../styles/globals.scss';

import BaseLayout from '@components/Layout/BaseLayout';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  withLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  let LayoutComponent = BaseLayout;

  const componentWithLayout = Component.withLayout ?? true;

  if (!componentWithLayout) {
    // @ts-ignore
    LayoutComponent = Fragment;
  }

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
