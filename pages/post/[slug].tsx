import { compile } from '@mdx-js/mdx';
import clsx from 'clsx';
import { H1 } from 'components';
import { CategoriesLinkList } from 'components/molecules/CategoriesLinkList/CategoriesLinkList';
import { PostContent } from 'components/molecules/PostContent/PostContent';
import Image from 'next/image';
import { Post } from 'orm';
import { postService } from 'orm/post/post.service';
import { PropsWithChildren } from 'react';
import { VFile } from 'vfile';

function PostHeading({ post, className }: { post: Post; className?: string }) {
  return (
    <div className={clsx('relative w-full min-h-56', className)}>
      {post.coverImg?.src && (
        <Image
          src={post.coverImg?.src}
          alt={post.coverImg.alt}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      )}
      <div className="text-white z-10 absolute bg-opacity-50 bg-black p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <H1>{post.title}</H1>
        <div>
          <CategoriesLinkList categories={post.categories} />
        </div>
      </div>
    </div>
  );
}

function Post({ post, html }: PropsWithChildren<{ post: Post; html: VFile }>) {
  return (
    <>
      <PostHeading className="mb-6" post={post} />
      <PostContent vFile={html} />
    </>
  );
}

export default Post;

export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const post = await postService.getPost(slug);
  const code = String(
    await compile(post?.content || '', {
      outputFormat: 'function-body',
    })
  );

  return {
    props: {
      post: post!,
      html: code,
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
