import { Category } from 'orm/category/category.model';

export interface PostFilterModel {
  categories?: Category[];
}
