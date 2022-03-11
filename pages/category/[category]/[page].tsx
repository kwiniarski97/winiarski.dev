import { isEmpty } from 'lodash';
import { GetStaticPropsContext } from 'next';
import { categories, Category } from 'orm/category/category.model';
import { postService } from 'orm/post/post.service';
import { PropsWithChildren } from 'react';
import { generatePagesList } from 'utils/generate-pages-list';

interface Props {
  category: Category;
  page: number;
}

function CategoryPage({ category, page }: PropsWithChildren<Props>) {
  const posts = postService.getPostsByPage({ pageNo: page });
  return <>{category}</>;
}

export function getStaticProps(context: GetStaticPropsContext<any>) {
  const { category } = context.params;
  return {
    props: { category },
  };
}

export async function getStaticPaths() {
  console.log('categories', categories);
  const possiblePathsPromises = categories.map(async (category) => {
    const numberOfPagesWithCategory = await postService.getNumberOfPages({
      categories: [category],
    });

    const possiblePages = generatePagesList(numberOfPagesWithCategory);

    const params = possiblePages.reduce(
      (params, page) => ({ ...params, category, page: String(page) }),
      {}
    );

    return { params };
  });

  const possiblePaths = await Promise.all(possiblePathsPromises);

  // it is possible that some path might be empty we need to filter it
  const paths = possiblePaths.filter((path) => !isEmpty(path.params));

  return {
    paths,
    fallback: false,
  };
}

export default CategoryPage;
