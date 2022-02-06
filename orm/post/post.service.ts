import { Post } from 'orm/post/post.model';
import { postRepository } from 'orm/post/post.repository';

// todo: refactor to global env
const pageSize = 10;

export const postService = {
  getPostByLink(link: string): Post | undefined {
    return postRepository.getAllPosts().find((post) => post.link === link);
  },

  getPostById(id: number): Post | undefined {
    return postRepository.getAllPosts().find((post) => post.id === id);
  },

  getPostsByPage({ pageNo }: { pageNo: number }) {
    const start = (pageNo - 1) * pageSize;
    const end = pageNo * pageSize;
    console.log(start, end);
    return postRepository.getPosts({ start, end });
  },

  getNumberOfPages(): number {
    return Math.ceil(postRepository.getNumberOfItems() / pageSize);
  },
};
