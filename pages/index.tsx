import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

const HOVER_COLORS = {
  colors: [
    'hover:text-cyan-400',
    'hover:text-red-400',
    'hover:text-green-400',
    'hover:text-yellow-400',
    'hover:text-violet-400',
    'hover:text-fuchsia-400',
  ],
  getColor() {
    const color = this.colors.shift();
    this.colors.push(color);
    return color;
  }
}

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mb-8 text-center text-slate-600 italic">
        <p>
          Hi! My name is <strong>Ilya Amelevich</strong> and I'm{' '}
          <strong>Software Developer</strong>
        </p>
        <p>Welcome to my blog</p>
      </section>
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <h2 className={`transition-colors duration-200 ease-in-out ${HOVER_COLORS.getColor()} pb-2 text-3xl font-extrabold leading-tight md:text-4xl`}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <div>
                <small>
                  <Date dateString={date} />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
