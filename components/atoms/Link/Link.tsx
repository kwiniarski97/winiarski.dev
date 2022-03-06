import clsx from 'clsx';
import { default as NextLink } from 'next/link';
import { PropsWithChildren } from 'react';

interface Props {
  // todo: better type?
  href: string;
  className?: string;
}

export function Link({ href, className, children }: PropsWithChildren<Props>) {
  return (
    <NextLink href={href} passHref>
      <a className={clsx('link', className)}>{children}</a>
    </NextLink>
  );
}
