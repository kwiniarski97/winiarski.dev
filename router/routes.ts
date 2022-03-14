import { Category } from 'orm/category/category.model';

export const routes = {
  getCategoryRoute(category: Category, page: number = 1) {
    return `/category/${category}/${page}`;
  },
  getPostRoute(slug: string) {
    return `/post/${slug}`;
  },
  getHomeRoute() {
    return '/1';
  },
  getPostsPage(page: number) {
    return `/${page}`;
  },
};
