import { sortBy as _sortBy } from 'lodash';
import { Post, UniquePostAttributes } from 'orm/post/post.model';

// todo: find a better way to get metadata from post directory
export const posts: Post[] = [
  {
    id: 1,
    link: '1',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary: 'some test post i got to create lol',
    publishedAt: 1643913060509,
    createdAt: 1643913060509,
  },
  {
    id: 2,
    link: '2',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary:
      'some test post i got to create lol some test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lol',
    publishedAt: 1643913060509,
    createdAt: 1643913060509,
  },
  {
    id: 3,
    link: '3',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary: 'some test post i got to create lol',
    publishedAt: 1643913060509,
    createdAt: 1643913060509,
  },
  {
    id: 4,
    link: '4',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary: 'some test post i got to create lol',
    publishedAt: 1643913060509,
    createdAt: 1643913060509,
  },
];

interface GetPostParams {
  start: number;
  end: number;
  sortBy?: keyof Post;
}

export const postRepository = {
  getAllPosts(
    { sortBy }: { sortBy: keyof Post } = { sortBy: 'publishedAt' }
  ): Post[] {
    return _sortBy(posts, sortBy);
  },

  getSinglePost(
    keyName: UniquePostAttributes,
    value: Post[UniquePostAttributes]
  ) {
    return posts.find((post) => post[keyName] === value);
  },

  getPosts(params: GetPostParams) {
    const { start = 0, end = 10, sortBy = 'publishedAt' } = params;
    return _sortBy(posts.slice(start, end), sortBy);
  },

  getNumberOfItems() {
    return posts.length;
  },
};
