interface MenuGroup {
  label: string;
  links: MenuLink;
}

interface MenuLink {
  label: string;
  to: string;
}

export const menu: (MenuGroup | MenuLink)[] = [];
