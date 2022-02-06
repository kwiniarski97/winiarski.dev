import { PostCard } from 'components';
import { Post } from 'orm';
import { PropsWithChildren } from 'react';

interface PostsListProps {
  posts: Post[];
}

function PostsList({ posts }: PropsWithChildren<PostsListProps>) {
  console.log('ee');
  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.link}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export { PostsList };
