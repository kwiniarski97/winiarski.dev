import { uniq } from 'lodash';
import { postService } from 'orm/post/post.service';

export const categoryService = {
  async getAllCategories() {
    const allPosts = await postService.getAllPosts();
    const categories = uniq(allPosts.map((post) => post.categories).flat());
    console.log(categories);
    return categories;
  },
};
