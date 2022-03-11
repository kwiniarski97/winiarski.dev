import { Post } from 'orm';
import { postService } from 'orm/post/post.service';
import { PropsWithChildren } from 'react';
import { VFile } from 'vfile';

function Post({ post }: PropsWithChildren<{ post: Post; html: VFile }>) {
  return post.title;
}

export default Post;

export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const post = await postService.getPost(slug);
  console.log(post, slug);
  return {
    props: {
      post: post!,
      html: {} as any,
    },
    notFound: post == null,
  };
}

export async function getStaticPaths() {
  const posts = await postService.getAllPosts();
  const slugs = posts.map((post) => post.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
