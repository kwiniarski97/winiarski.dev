import Image from 'next/image';
import logoSrc from 'public/images/brand/logo_black_cut.png';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Logo() {
  return <Image src={logoSrc} alt="logo" height={30} width={159} />;
}

function HamburgerMenu() {
  return (
    <div className="inline sm:hidden h-4 w-4 text-black">
      <GiHamburgerMenu />
    </div>
  );
}

function Header() {
  return (
    <header className="p-2 flex items-center justify-between">
      <Logo />
      <HamburgerMenu />
    </header>
  );
}

export { Header };
