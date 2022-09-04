import Head from 'next/head';
import Link from 'next/link';
import Favicon from './favicon';
import Header from './header';

export const siteTitle = 'Ilya Amelevich personal blog';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="container max-w-2xl mx-auto md:px-2">
      <Head>
        <Favicon />
        <meta name="description" content="Ilya Amelevich personal blog" />
        <meta name="og:title" content={siteTitle} />
        <script
          src="https://kit.fontawesome.com/301fc2a094.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <main>{children}</main>
      {!home && (
        <div className="my-6">
          <Link href="/">
            <a className="gradient-link">
              ← Back to home
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
