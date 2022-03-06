import { CategoryLink } from 'components/atoms/CategoryLink/CategoryLink';
import { Category } from 'orm/category/category.model';
import React, { PropsWithChildren } from 'react';
import { joinReactNodes } from 'utils';

export function CategoriesLinkList({
  categories = [],
}: PropsWithChildren<{ categories: Category[] }>) {
  const categoryLinks = categories.map((category) => (
    <CategoryLink key={category} category={category} />
  ));
  return <>{joinReactNodes(categoryLinks, ', ')}</>;
}
