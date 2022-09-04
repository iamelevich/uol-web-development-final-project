import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PostData } from '../../lib/types';
import Author from '../../components/author';
import Source from '../../components/source';

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="pb-2 text-3xl font-extrabold leading-tight md:text-4xl">
          {postData.title}
        </h1>
        <div className="flex flex-row-reverse mb-1">
          <small>
            by <Author name={postData.authorName} link={postData.authorLink} />
          </small>
          <small className="text-slate-600 mx-1">
            posted on{' '}
            <Source name={postData.sourceName} link={postData.source} />
          </small>
          <small className="text-slate-600 italic mx-1">
            In <Date dateString={postData.date} />
          </small>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
