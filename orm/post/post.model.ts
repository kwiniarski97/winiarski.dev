import { Category } from 'orm/category/category.model';

export type UniquePostAttributes = 'slug';

export interface Post {
  /**
   * slug is unique and it works as id.
   */
  slug: string;
  title: string;
  excerpt: string;
  categories: Category[];
  coverImg?: {
    src: string;
    alt?: string;
  };
  publishedAt: Date;
  content: string;
}
