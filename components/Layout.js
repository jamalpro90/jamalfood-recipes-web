import Head from 'next/head';
import Navbar from './Navbar';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/img/ham.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
      </Head>
      <Navbar />

      {children}
    </div>
  );
}

export default Layout;
