import { Category } from 'orm/category/category.model';

export type UniquePostAttributes = 'link';

export interface Post {
  /**
   * Link is unique and it works as id.
   */
  link: string;
  title: string;
  summary: string;
  categories: Category[];
  coverImg?: string;
  publishedAt: number;
}
