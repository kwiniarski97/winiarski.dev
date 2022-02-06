import type { NextPage } from 'next';
import { glob } from 'utils';

const Home: NextPage<{ posts: string[] }> = ({ posts }) => {
  return null;
};

export async function getStaticProps() {
  const posts = await glob('*', { cwd: __dirname });

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}

export default Home;
