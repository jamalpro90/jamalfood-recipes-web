import Head from 'next/head';
import Navbar from './Navbar';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/img/ham.png" />
      </Head>
      <Navbar />

      {children}
    </div>
  );
}

export default Layout;
