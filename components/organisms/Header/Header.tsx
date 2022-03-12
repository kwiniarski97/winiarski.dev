import { Link } from 'components/atoms/Link/Link';
import React from 'react';
import { routes } from 'router/routes';

function Header() {
  return (
    <div className="w-full bg-white shadow-2xl h-12 flex align-center">
      <div className="p-2 container m-auto">
        <header className="text-center">
          <Link href={routes.getHomeRoute()}>
            <h1 className="font-mono text-xl italic">winiarski.dev</h1>
          </Link>
        </header>
      </div>
    </div>
  );
}

export { Header };
