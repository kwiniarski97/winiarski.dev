import { Button, ButtonTheme } from 'components/atoms/Button/Button';
import Link from 'next/link';
import React, { PropsWithChildren, useMemo } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

type MenuItems = MenuItem[];

function MenuPill({ children }: PropsWithChildren<{}>) {
  return (
    <a>
      <Button theme={ButtonTheme.Primary}>{children}</Button>
    </a>
  );
}

function Menu(props: PropsWithChildren<{ items: MenuItems }>) {
  const { items } = props;
  return (
    <ul className="flex gap-4">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} passHref>
            <MenuPill>{item.label}</MenuPill>
          </Link>
          {/*{item.children && <Menu items={item.children} />}*/}
        </li>
      ))}
    </ul>
  );
}

function useMenuItems() {
  ng;
  const menuItems = useMemo((): MenuItems => {
    return [
      { label: 'Blog', href: '/blog' },
      { label: 'Books', href: '/books' },
    ];
  }, []);

  return { menuItems };
}

function HamburgerMenu() {
  return (
    <div className="inline sm:hidden h-4 w-4 text-black">
      <GiHamburgerMenu />
    </div>
  );
}

function Header() {
  const { menuItems } = useMenuItems();

  return (
    <div className="w-full bg-white shadow-2xl">
      <div className="p-2 container m-auto ">
        <header className="flex items-center gap-4">
          <h1 className="text-xl italic">winiarski.dev</h1>
          <HamburgerMenu />
          <Menu items={menuItems} />
        </header>
      </div>
    </div>
  );
}

export { Header };
