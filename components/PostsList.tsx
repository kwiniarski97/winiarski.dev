import { PostCard } from 'components';
import { Post } from 'orm';
import { PropsWithChildren } from 'react';

interface PostsListProps {
  posts: Post[];
}

function PostsList({ posts = [] }: PropsWithChildren<PostsListProps>) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <li key={post.link}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export { PostsList };
