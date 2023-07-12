import Favicon from '@components/Atom/Favicon';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>A9G Starter</title>
        <Favicon />
      </Head>
      {children}
    </>
  );
}
