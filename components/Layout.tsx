import { GlobalLoadingContext } from 'features/loading/GlobalLoadingProvider';
import { ThemeContext } from 'features/themes/ThemeProvider';
import React, { PropsWithChildren, useContext } from 'react';
import { Aside, Footer, Header } from '.';

function Layout({ children }: PropsWithChildren<{}>) {
  const { currentThemeClass } = useContext(ThemeContext);
  const { isLoading } = useContext(GlobalLoadingContext);

  console.log('layout is loading', isLoading);
  return (
    <div className={currentThemeClass}>
      <Header></Header>
      {isLoading && 'loading'}
      <Aside></Aside>
      <main className="container px-2 mx-auto my-4">{children}</main>
      <Footer></Footer>
    </div>
  );
}

export { Layout };
