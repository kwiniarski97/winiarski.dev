import { Post } from 'orm/post/post.model';
import { postRepository } from 'orm/post/post.repository';

// todo: refactor to global env
const pageSize = 10;

export const postService = {
  async getPostByLink(link: string): Promise<Post | undefined> {
    return await postRepository.getSinglePost('link', link);
  },

  async getPostsByPage({ pageNo }: { pageNo: number }) {
    const start = (pageNo - 1) * pageSize;
    const end = pageNo * pageSize;
    return await postRepository.getPosts({ start, end });
  },

  getNumberOfPages(): number {
    return Math.ceil(postRepository.getNumberOfItems() / pageSize);
  },
};
