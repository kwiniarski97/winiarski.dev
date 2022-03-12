import { PAGE_SIZE } from 'consts/page-size';
import { PostFilterModel } from 'orm/post/post-filter.model';
import { Post } from 'orm/post/post.model';
import { postRepository } from 'orm/post/post.repository';

export const postService = {
  async getAllPosts(): Promise<Post[]> {
    return postRepository.getAllPosts();
  },

  /**
   *
   * @param pageNo - 1 indexed, if you want first page you should pass 1
   */
  async getPostsByPage({ pageNo }: { pageNo: number }) {
    const start = (pageNo - 1) * PAGE_SIZE;
    const end = pageNo * PAGE_SIZE;
    return await postRepository.getPosts({ start, end });
  },

  async getNumberOfPages(filters: PostFilterModel = {}): Promise<number> {
    return Math.ceil(
      (await postRepository.getNumberOfItems(filters)) / PAGE_SIZE
    );
  },
  async getPost(slug: string): Promise<Post | undefined> {
    return postRepository.getSinglePost('slug', slug);
  },
};
