import { ThemeContext } from 'features/themes/ThemeProvider';
import React, { PropsWithChildren, useContext } from 'react';
import { Aside, Footer, Header } from '.';

function Layout({ children }: PropsWithChildren<{}>) {
  const { currentThemeClass } = useContext(ThemeContext);
  return (
    <div className={currentThemeClass}>
      <Header></Header>
      <Aside></Aside>
      <main className="container px-2 mx-auto my-4">{children}</main>
      <Footer></Footer>
    </div>
  );
}

export { Layout };
