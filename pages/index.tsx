import { PostsList } from 'components/templates/PostsList/PostsList';
import { Post } from 'orm';
import { postService } from 'orm/post/post.service';

interface HomeProps {
  posts: Post[];
}

export function Home({ posts }: HomeProps) {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const firstPageOfPosts = await postService.getPostsByPage({ pageNo: 1 });

  return {
    props: {
      posts: firstPageOfPosts,
    }, // will be passed to the page component as props
  };
}

export default Home;
