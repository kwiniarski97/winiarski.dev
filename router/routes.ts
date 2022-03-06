import { Category } from 'orm/category/category.model';

export const routes = {
  getCategoryRoute(category: Category) {
    // todo: zrobić to XD
    return `category/${category}`;
  },
};
