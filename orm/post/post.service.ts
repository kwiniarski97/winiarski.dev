import { PAGE_SIZE } from 'consts/page-size';
import { Page } from 'models/page';
import { PostFilterModel } from 'orm/post/post-filter.model';
import { Post } from 'orm/post/post.model';
import { postRepository } from 'orm/post/post.repository';

const getNumberOfPages = (noOfItems: number, pageSize: number) => {
  return Math.ceil(noOfItems / pageSize);
};

export const postService = {
  async getAllPosts(): Promise<Post[]> {
    return postRepository.getAllPosts();
  },

  /**
   *
   * @param pageNo - 1 indexed, if you want first page you should pass 1
   */
  getPostsPage: async function ({
    pageNo,
  }: {
    pageNo: number;
  }): Promise<Page<Post>> {
    const start = (pageNo - 1) * PAGE_SIZE;
    const end = pageNo * PAGE_SIZE;
    const posts = await postRepository.getPosts({ start, end });
    const totalItems = await postRepository.countPosts();
    return {
      pageNo: pageNo,
      itemsPerPage: PAGE_SIZE,
      items: posts,
      totalItems: totalItems,
      totalPages: getNumberOfPages(totalItems, PAGE_SIZE),
    };
  },

  async getNumberOfPages(filters: PostFilterModel = {}): Promise<number> {
    return Math.ceil((await postRepository.countPosts(filters)) / PAGE_SIZE);
  },
  async getPost(slug: string): Promise<Post | undefined> {
    return postRepository.getSinglePost('slug', slug);
  },
};
