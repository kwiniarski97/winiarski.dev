import clsx from 'clsx';
import { H1, Link, P, SubText } from 'components';
import { CategoriesLinkList } from 'components/molecules/CategoriesLinkList/CategoriesLinkList';
import Image from 'next/image';
import { Post } from 'orm';
import { PropsWithChildren } from 'react';
import { routes } from 'router/routes';
import { getFormattedDate } from 'utils';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PropsWithChildren<PostCardProps>) {
  return (
    <article
      className={clsx(
        'flex flex-col md:flex-row gap-2 shadow-lg rounded-xl overflow-hidden min-h-56 bg-white'
      )}
    >
      {post.coverImg && (
        <div className="h-40 md:h-auto md:w-1/4 relative">
          <Image
            src={post.coverImg.src}
            alt={post.coverImg.alt}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}
      <div className="md:min-w-3/4 w-full flex flex-col justify-between p-4 gap-3">
        <div className="flex-grow">
          <Link href={routes.getPostRoute(post.slug)}>
            <H1>{post.title}</H1>
          </Link>
          <P className="line-clamp-4">{post.excerpt}</P>
        </div>
        <div className="flex justify-between">
          <SubText>
            <CategoriesLinkList categories={post.categories} />
          </SubText>
          <SubText>{getFormattedDate(post.publishedAt)}</SubText>
        </div>
      </div>
    </article>
  );
}
