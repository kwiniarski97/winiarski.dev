import clsx from 'clsx';
import { LoadingIndicator } from 'components/atoms/LoadingIndicator/LoadingIndicator';
import { useGlobalLoadingContext } from 'features/loading/GlobalLoadingProvider';
import { ThemeContext } from 'features/themes/ThemeProvider';
import React, { PropsWithChildren, useContext } from 'react';
import { Aside, Footer, Header } from '.';

function Layout({ children }: PropsWithChildren<{}>) {
  const { currentThemeClass } = useContext(ThemeContext);
  const { isLoading } = useGlobalLoadingContext();

  console.log('layout is loading', isLoading);
  return (
    <div className={clsx(currentThemeClass, 'min-h-screen')}>
      <Header></Header>
      <LoadingIndicator isLoading={isLoading} indeterminate />
      <Aside></Aside>
      <main className="container px-2 mx-auto my-4">{children}</main>
      <Footer></Footer>
    </div>
  );
}

export { Layout };
