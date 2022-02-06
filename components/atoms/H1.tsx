import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface H1Props {
  className?: string;
}

function H1({ children, className }: PropsWithChildren<H1Props>) {
  return <h1 className={clsx(className)}>{children}</h1>;
}

export { H1 };
