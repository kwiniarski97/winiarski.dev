import { difference, sortBy as _sortBy } from 'lodash';
import { PostFilterModel } from 'orm/post/post-filter.model';
import { Post, UniquePostAttributes } from 'orm/post/post.model';
import posts from './posts.preval';

interface GetPostParams {
  start: number;
  end: number;
  sortBy?: keyof Post;
}

const filterPosts = (posts: Post[], filters: PostFilterModel = {}): Post[] => {
  return posts.filter(
    // todo extract to util
    (post) => difference(filters.categories, post.categories).length === 0
  );
};

type getAllPostsProps = PostFilterModel & { sortBy?: keyof Post };

export const postRepository = {
  async getAllPosts(props: getAllPostsProps = {}): Promise<Post[]> {
    const filteredPosts = filterPosts(posts, props);
    const sortedPosts = _sortBy(filteredPosts, props.sortBy || 'publishedAt');

    return sortedPosts;
  },

  getSinglePost(
    keyName: UniquePostAttributes,
    value: Post[UniquePostAttributes]
  ) {
    return posts.find((post) => post[keyName] === value);
  },

  async getPosts(params: GetPostParams): Promise<Post[]> {
    const { start = 0, end = 10, sortBy = 'publishedAt' } = params;
    return _sortBy(posts.slice(start, end), sortBy);
  },

  async countPosts(filters: PostFilterModel = {}): Promise<number> {
    const allPosts = await this.getAllPosts(filters);
    return allPosts.length;
  },
};
