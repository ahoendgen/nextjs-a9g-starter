import React, { PropsWithChildren } from 'react';

const Favicon: React.FC<PropsWithChildren<any>> = (): React.ReactElement => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="apple-mobile-web-app-title" content="Eishockey.koeln" />
      <meta name="application-name" content="Hobby Eishockey Köln" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};

export { Favicon };
