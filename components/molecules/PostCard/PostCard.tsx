import clsx from 'clsx';
import { H1, P } from 'components';
import { SubText } from 'components/atoms/SubText/SubText';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from 'orm';
import { PropsWithChildren } from 'react';
import { getFormattedDate } from 'utils';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PropsWithChildren<PostCardProps>) {
  return (
    <Link href={post.link} passHref>
      <a>
        <article
          className={clsx(styles.card, 'flex flex-col md:flex-row gap-2')}
        >
          <Image
            src={post.coverImg}
            alt={post.title}
            width={300}
            height={200}
            objectFit="cover"
          />
          <div className="flex flex-col justify-between md:py-4 grow">
            <div>
              <H1 className={styles.title}>{post.title}</H1>
              <P>{post.summary}</P>
            </div>
            <div className="flex justify-end">
              <SubText>{getFormattedDate(post.publishedAt)}</SubText>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
}
