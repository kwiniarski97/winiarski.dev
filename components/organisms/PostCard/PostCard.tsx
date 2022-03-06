import clsx from 'clsx';
import { H1, Link, P, SubText } from 'components';
import { CategoriesLinkList } from 'components/molecules/CategoriesLinkList/CategoriesLinkList';
import Image from 'next/image';
import { Post } from 'orm';
import { PropsWithChildren } from 'react';
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
            src={post.coverImg}
            alt={post.title}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}
      <div className="md:w-3/4 flex flex-col justify-between p-4 gap-3">
        <div className="flex-grow">
          <Link href={post.link}>
            <H1>{post.title}</H1>
          </Link>
          <P className="line-clamp-4">{post.summary}</P>
        </div>
        <div className="flex justify-between">
          <SubText>
            <CategoriesLinkList categories={post.categories} />
          </SubText>
          <SubText>{getFormattedDate(post.publishedAt)}</SubText>
        </div>
        {/*<Link href={post.link} passHref>*/}
        {/*  <Button theme={ButtonTheme.Primary} className="md:mr-0 md:ml-auto">*/}
        {/*    Read more*/}
        {/*  </Button>*/}
        {/*</Link>*/}
      </div>
    </article>
  );
}
