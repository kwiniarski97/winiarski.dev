import { PaginationControl } from 'components/molecules/PaginationControl/PaginationControl';
import { PostCard } from 'components/organisms/PostCard/PostCard';
import { Post } from 'orm';
import { PropsWithChildren, useCallback } from 'react';

interface PostsListProps {
  posts: Post[];
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function PostsList({
  posts,
  page,
  totalPages,
  onPageChange,
}: PropsWithChildren<PostsListProps>) {
  const handlePreviousPageClick = useCallback(() => {
    onPageChange?.(page - 1);
  }, [onPageChange, page]);

  const handleNextPageClick = useCallback(() => {
    onPageChange?.(page + 1);
  }, [onPageChange, page]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 mb-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
      <PaginationControl
        page={page}
        totalPages={totalPages}
        onPreviousPageClick={handlePreviousPageClick}
        onNextPageClick={handleNextPageClick}
      />
    </>
  );
}
