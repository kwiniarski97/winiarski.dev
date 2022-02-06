import { PropsWithChildren } from 'react';

interface Link {
  to: string;
  title: string;
}

interface MenuItemProps {
  name: string;
  links: Link[];
}

function MenuGroup({ name, links }: PropsWithChildren<MenuItemProps>) {
  return (
    <>
      <h6>{name}</h6>
      <ul>
        {links.map((link) => (
          <li key={link.title}>{link.title}</li>
        ))}
      </ul>
    </>
  );
}

function Aside() {
  return (
    <aside>
      <nav>
        <ul></ul>
      </nav>
    </aside>
  );
}

export { Aside };
