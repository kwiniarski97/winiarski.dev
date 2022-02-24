import { PostsList } from 'components/PostsList';
import { range } from 'lodash';
import { Post } from 'orm';
import { postService } from 'orm/post/post.service';
import { PropsWithChildren } from 'react';

interface Pages {
  posts: Post[];
}

function Posts({ posts }: PropsWithChildren<Pages>) {
  return <PostsList posts={posts} />;
}

export default Posts;

export async function getStaticProps(context: any) {
  const { page } = context.params;
  const pageNo = Number(page);
  const posts = postService.getPostsByPage({ pageNo });
  return {
    props: { posts },
  };
}

export function getStaticPaths() {
  const numberOfPages = postService.getNumberOfPages();
  console.log(numberOfPages);

  return {
    // Returns a list of all possible pages
    paths: range(1, numberOfPages + 1).map((page) => ({
      params: { page: page.toString() },
    })),
    fallback: true,
  };
}
