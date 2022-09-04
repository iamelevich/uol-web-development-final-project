import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { PostList } from '../lib/types';
import Image from 'next/image';
import Author from '../components/author';
import Source from '../components/source';
import { shuffle } from '../lib/utils';

const HOVER_COLORS = {
  colors: shuffle([
    'hover:text-cyan-400',
    'hover:text-red-400',
    'hover:text-green-400',
    'hover:text-yellow-400',
    'hover:text-violet-400',
    'hover:text-fuchsia-400',
  ]),
  getColor() {
    const color = this.colors.shift();
    this.colors.push(color);
    return color;
  },
};

export default function Home({ allPostsData }: { allPostsData: PostList }) {
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
          {allPostsData.map(
            ({
              id,
              date,
              title,
              image,
              authorLink,
              authorName,
              firstParagraph,
              source,
              sourceName,
            }) => (
              <li key={id}>
                <h2
                  className={`transition-colors duration-200 ease-in-out ${HOVER_COLORS.getColor()} pb-2 text-3xl font-extrabold leading-tight md:text-4xl`}
                >
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
                <div className="flex flex-row-reverse mb-1">
                  <small>
                    by <Author name={authorName} link={authorLink} />
                  </small>
                  <small className="text-slate-600 mx-1">
                    posted on <Source name={sourceName} link={source} />
                  </small>
                  <small className="text-slate-600 italic mx-1">
                    In <Date dateString={date} />
                  </small>
                </div>
                <Image
                  src={image}
                  alt="Picture of the author"
                  width={1400}
                  height={523}
                />
                <div
                  className="prose my-2"
                  dangerouslySetInnerHTML={{ __html: firstParagraph }}
                />
                <div className="text-center py-2">
                  <Link href={`/posts/${id}`}>
                    <a className="gradient-link">
                      Read More
                    </a>
                  </Link>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
