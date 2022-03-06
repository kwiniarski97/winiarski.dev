import React from 'react';

function Header() {
  return (
    <div className="w-full bg-white shadow-2xl h-12 flex align-center">
      <div className="p-2 container m-auto">
        <header className="flex items-center gap-4">
          <h1 className="text-xl italic">winiarski.dev</h1>
        </header>
      </div>
    </div>
  );
}

export { Header };
