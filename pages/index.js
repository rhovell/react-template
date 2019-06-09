import Head from 'next/head';
import Layout from '../components/MyLayout.js';

const homepageStyle = {
  padding: 10,
  margin: 0,

}
export default function Index() {
  return (
    <Layout>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, max-width=device-width" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="" />
    </Head>
      <div className="homepage" style={homepageStyle}>
        <p>Homepage</p>
      </div>
    </Layout>
  );
}
