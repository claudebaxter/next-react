import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Claude. I'm a property manager learning web development. You can contact me at e.baxter@dark-coin.io.</p>
        <p>
          (This is a sample website - you will be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h2 className="alert">
        <Link href="/alert">
            <a>Click to test alert.js</a>
        </Link>
      </h2>
    </Layout>
  );
}