import { GetStaticPropsContext } from 'next';
import { Category } from 'orm/category/category.model';
import { categoryService } from 'orm/category/category.service';
import { postService } from 'orm/post/post.service';
import { PropsWithChildren } from 'react';
import { generatePagesList } from 'utils/generate-pages-list';

interface Props {
  category: Category;
  page: number;
}

function CategoryPage({ category, page }: PropsWithChildren<Props>) {
  const posts = postService.getPostsPage({ pageNo: page });
  return <>{category}</>;
}

export function getStaticProps(context: GetStaticPropsContext<any>) {
  const { category } = context.params;
  return {
    props: { category },
  };
}

export async function getStaticPaths() {
  const categories = await categoryService.getAllCategories();

  const paths = [];
  for (let category of categories) {
    const numberOfPagesWithCategory = await postService.getNumberOfPages({
      categories: [category],
    });

    const possiblePages = generatePagesList(numberOfPagesWithCategory);

    const params = possiblePages.map((page) => ({
      params: {
        category,
        page: String(page),
      },
    }));

    paths.push(...params);
  }

  return {
    paths,
    fallback: false,
  };
}

export default CategoryPage;
