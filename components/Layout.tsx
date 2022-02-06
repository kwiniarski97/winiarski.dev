import React, { PropsWithChildren } from 'react';
import { Aside, Footer, Header } from '.';

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header></Header>
      <Aside></Aside>
      <main className="container mx-auto my-4">{children}</main>
      <Footer></Footer>
    </>
  );
}

export { Layout };
