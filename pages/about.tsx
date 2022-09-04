import Head from 'next/head';
import Layout from '../components/layout';

export default function About({}) {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <section className="mb-8 text-center text-slate-600">
        <p>
          Hi! My name is <strong>Ilya Amelevich</strong> and I{"'"}m{' '}
          <strong>Software Developer</strong>
        </p>
        <p>Welcome to my blog</p>
      </section>
    </Layout>
  );
}
