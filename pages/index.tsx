import type { NextPage } from 'next';

const Home: NextPage<{ posts: string[] }> = ({ posts }) => {
  return null;
};

export async function getStaticProps() {
  return {
    props: {
      posts: [],
    }, // will be passed to the page component as props
  };
}

export default Home;
