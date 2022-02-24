import clsx from 'clsx';
import { Button, H1, P } from 'components';
import { ButtonTheme } from 'components/atoms/Button/Button';
import { SubText } from 'components/atoms/SubText/SubText';
import Image from 'next/image';
import Link from 'next/link';
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
        'flex flex-col gap-2 shadow-lg rounded-xl overflow-hidden'
      )}
    >
      <Image
        src={post.coverImg}
        alt={post.title}
        width={300}
        height={200}
        objectFit="cover"
      />
      <div className="flex flex-col justify-between grow p-4">
        <div>
          <H1>{post.title}</H1>
          <P className="line-clamp-4">{post.summary}</P>
        </div>
        <div className="flex justify-end">
          <SubText>{getFormattedDate(post.publishedAt)}</SubText>
        </div>
        <Link href={post.link} passHref>
          <Button theme={ButtonTheme.Primary} className="mt-2">
            Read more
          </Button>
        </Link>
      </div>
    </article>
  );
}
