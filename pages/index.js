import Head from 'next/head';
import Layout from '../components/MyLayout.js';

export default function Index() {
  return (
    <Layout>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <p>Hello Next.js</p>
    </Layout>
  );
}
