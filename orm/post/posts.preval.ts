import { POSTS_DIRECTORY } from 'constants/posts-directory';
import * as fs from 'fs';
import matter from 'gray-matter';
import preval from 'next-plugin-preval';
import { Post } from 'orm/post/post.model';
import path from 'path';

async function getPosts(): Promise<Post[]> {
  const folderEntries = fs.readdirSync(POSTS_DIRECTORY);
  const mdxFiles = folderEntries.filter(
    (file) => path.extname(file) === '.mdx'
  );
  const postsData = mdxFiles.map((file) => {
    const fileMetaData = matter.read(`${POSTS_DIRECTORY}/${file}`, {
      excerpt: false,
    });

    return {
      ...fileMetaData.data,
      excerpt: fileMetaData.data.excerpt,
      slug: path.parse(file).name,
      categories: fileMetaData.data.categories || [],
      content: fileMetaData.content,
    } as Post;
  });

  console.log('Preevaluted posts:', postsData);

  return postsData;
}

export default preval(getPosts());
