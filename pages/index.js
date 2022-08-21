import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hey, I'm <b>Arpit</b>. I'm a Computer Science undergraduate at Indian Institute of Technology (BHU) Varanasi.</p>
        </section>
      </Layout>
  );
}