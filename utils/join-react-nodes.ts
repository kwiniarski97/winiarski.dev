import { isEmpty } from 'lodash';
import React from 'react';

export function joinReactNodes(
  nodesToJoin: React.ReactNode[],
  separator: string
): React.ReactNode[] {
  return nodesToJoin.reduce(
    (nodes: React.ReactNode[], node) => [
      ...nodes,
      isEmpty(nodes) ? '' : separator,
      node,
    ],
    []
  );
}
