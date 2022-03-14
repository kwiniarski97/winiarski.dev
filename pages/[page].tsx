import { PostsList } from 'components/templates/PostsList/PostsList';
import { useGlobalLoadingContext } from 'features/loading/GlobalLoadingProvider';
import { range } from 'lodash';
import { useRouter } from 'next/router';
import { Post } from 'orm';
import { postService } from 'orm/post/post.service';
import { PropsWithChildren, useCallback } from 'react';
import { routes } from 'router/routes';

interface Pages {
  posts: Post[];
  pageNo: number;
  totalPages: number;
}

function Posts({ posts, pageNo, totalPages }: PropsWithChildren<Pages>) {
  const router = useRouter();
  const { setIsLoading } = useGlobalLoadingContext();

  const handlePageChange = useCallback(
    async (page: number) => {
      const pageRoute = routes.getPostsPage(page);
      setIsLoading(true);
      await router.push(pageRoute);
      setIsLoading(false);
    },
    [router, setIsLoading]
  );

  return posts?.length ? (
    <PostsList
      posts={posts}
      page={pageNo}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  ) : (
    'empty state'
  );
}

export default Posts;

export async function getStaticProps(context: any) {
  const { page } = context.params;
  const pageNo = Number(page);
  const postsPage = await postService.getPostsPage({ pageNo });
  return {
    props: {
      posts: postsPage.items,
      pageNo,
      totalPages: postsPage.totalPages,
    },
  };
}

export async function getStaticPaths() {
  const numberOfPages = await postService.getNumberOfPages();

  return {
    // Returns a list of all possible pages
    paths: range(1, numberOfPages + 1).map((page) => ({
      params: { page: page.toString() },
    })),
    fallback: true,
  };
}
