import { Link } from 'components';
import { Category, getCategoryName } from 'orm/category/category.model';
import { PropsWithChildren } from 'react';
import { routes } from 'router/routes';

interface Props {
  category: Category;
}

export function CategoryLink({ category }: PropsWithChildren<Props>) {
  const link = routes.getCategoryRoute(category);
  return (
    <Link href={link} className="opacity-90 underline-offset-1 italic">
      {getCategoryName(category)}
    </Link>
  );
}
