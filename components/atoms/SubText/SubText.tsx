import { PropsWithChildren } from 'react';

export function SubText({ children }: PropsWithChildren<{}>) {
  return <p className="text-xs text-gray-700">{children}</p>;
}
