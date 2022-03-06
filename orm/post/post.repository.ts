import * as fs from 'fs';
import { sortBy as _sortBy } from 'lodash';
import { Post, UniquePostAttributes } from 'orm/post/post.model';

// todo: find a better way to get metadata from post directory
export const posts: Post[] = [
  {
    link: '1',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary: 'some test post i got to create lol',
    publishedAt: 1643913060509,
    categories: [],
  },
  {
    link: '2',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary:
      'some test post i got to create lol some test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lolsome test post i got to create lol',
    publishedAt: 1643913060509,
    categories: [],
  },
  {
    link: '3',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary: 'some test post i got to create lol',
    publishedAt: 1643913060509,
    categories: [],
  },
  {
    link: '4',
    title: 'post title',
    coverImg: '/placeholder.jpeg',
    summary: 'some test post i got to create lol',
    publishedAt: 1643913060509,
    categories: [],
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
  ): Promise<Post[]> {
    return new Promise((resolve, error) => {
      fs.readdir('pages/post', (error, files) => {
        console.log('getAllPosts');
        console.log(files);
      });

      const sortedPosts = _sortBy(posts, sortBy);
      resolve(sortedPosts);
    });
  },

  getSinglePost(
    keyName: UniquePostAttributes,
    value: Post[UniquePostAttributes]
  ) {
    return posts.find((post) => post[keyName] === value);
  },

  async getPosts(params: GetPostParams): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      console.log('postRepository, getAllPost');
      fs.readdir('pages/post', (error, files) => {
        console.log('getPosts');
        console.log(files);
      });
      const { start = 0, end = 10, sortBy = 'publishedAt' } = params;
      resolve(_sortBy(posts.slice(start, end), sortBy));
    });
  },

  getNumberOfItems() {
    return posts.length;
  },
};
