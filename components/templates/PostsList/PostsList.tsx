import { PostCard } from 'components/organisms/PostCard/PostCard';
import { Post } from 'orm';
import { PropsWithChildren } from 'react';

interface PostsListProps {
  posts: Post[];
}

export function PostsList({ posts }: PropsWithChildren<PostsListProps>) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}