import { run } from '@mdx-js/mdx';
import { MDXModule } from 'mdx/types';
import { Fragment, useEffect, useState } from 'react';
import * as runtime from 'react/jsx-runtime.js';
import { VFile } from 'vfile';

interface Props {
  vFile: VFile;
}

export function PostContent({ vFile }: Props) {
  const [mdxModule, setMdxModule] = useState<MDXModule>();
  const Content = mdxModule ? mdxModule.default : Fragment;

  useEffect(() => {
    (async () => {
      setMdxModule(await run(vFile, runtime));
    })();
  }, [vFile]);

  return (
    <div>
      <Content />
    </div>
  );
}
