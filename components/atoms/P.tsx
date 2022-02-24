import { HTMLAttributes, PropsWithChildren } from 'react';

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

function P({ children, ...props }: PropsWithChildren<PProps>) {
  return <p {...props}>{children}</p>;
}

export { P };
