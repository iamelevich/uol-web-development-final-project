import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Image from 'next/image';

import MainPageWireframe from '../public/images/Main_page.png';
import PostWireframe from '../public/images/Post.png';
import AboutMeWireframe from '../public/images/About_me.png';
import FindPhotosWireframe from '../public/images/Find_Photos.png';
import ReportWireframe from '../public/images/Report.png';
import SitemapImage from '../public/images/sitemap.png';

export default function ReportPage() {
  return (
    <Layout>
      <Head>
        <title>Report for UoL Web Development module</title>
      </Head>
      <section className="prose">
        <h1 className="text-center">Report for UoL Web Development module</h1>
        <h2>
          State 3 things that have inspired you when creating your website.
        </h2>
        <ul>
          <li>
            The big amount of personal websites, but minimal design was inspired
            by <a href="https://medium.com">Medium</a>
          </li>
          <li>
            Also cause I have wanted to try{' '}
            <a href="https://nextjs.org">Next.js</a> for static sites creation
          </li>
          <li>
            Last I think is that I wanted to work with{' '}
            <a href="https://tailwindcss.com">TailwindCSS</a> more, cause I
            think this is one of the best thing that happend with fronted for
            the last years
          </li>
        </ul>
        <h2>State 3 ways in which your site is accessible.</h2>
        <ul>
          <li>To read about my expirience</li>
          <li>
            In future will use it like a template for my personal web site and
            will add here my articles. Probably it will be helpfull for somebody
          </li>
          <li>Search for the free photos</li>
        </ul>
        <h2>
          State 3 ways in which you have considered usability in your site.
        </h2>
        <ul>
          <li>
            I am not UX designer, but I had seen a lot of websites, so I had
            tried to make it as simple as possible to make user expirience as
            smooth as possible
          </li>
          <li>
            Checked by myself on different devices and screen sizes. Also asked
            my wife to check it
          </li>
          <li>
            There is no any complex functionality on this website, so I just
            tried to keep it minimalistic
          </li>
        </ul>
        <h2>
          State 3 things you had to learn/find out by yourself when creating
          your site, and describe how you did that
        </h2>
        <ul>
          <li>
            Went deeper in <a href="https://tailwindcss.com">TailwindCSS</a>{' '}
            docs and found some usefull stuff like gradients and typography
            plugin
          </li>
          <li>
            Find a way how fetching remote data can be done with{' '}
            <a href="https://tanstack.com/query/v4">react-query</a>
          </li>
          <li>
            That <a href="https://nextjs.org">Next.js</a> has problems with
            routing when your base path not root. Found that when tried to
            deploy my website into GitHub Pages, but found a way how it can be
            fixed. Also found not obvious problem with GitHub pages, that it
            ignore all files in _nest dirrectory cause{' '}
            <a href="https://jekyllrb.com/">Jekyll</a>
          </li>
        </ul>
        <h2>What aspect(s) of your work do you think worked well and why?</h2>
        <p>
          Everithing, cause this is super simple and there is no nothing complex
        </p>
        <h2>
          What aspect(s) of your work could be improved, and how might you do
          things differently another time?
        </h2>
        <p>
          A lot of things, the main one - I will not use static HTML, SSR and
          some static generation - yes, but make it staic - no. Also find photo
          part can be improved a lot with filters, paging and etc. Only basic
          functionality was implemented.
        </p>
        <h2>What resources were used when creating your work?</h2>
        <p>
          I have used only documentation of libraries/frameworks that I used.
          This is: <a href="https://nextjs.org">Next.js</a> and{' '}
          <a href="https://tailwindcss.com">TailwindCSS</a>.
        </p>
        <ol>
          <li>
            Tailwindcss.com, {"'"}TailwindCSS Reference{"'"}, 2022. [Online].
            Available:{' '}
            <a href="https://tailwindcss.com">https://tailwindcss.com</a>
          </li>
          <li>
            Next.js, {"'"}Next.js Reference{"'"}, 2022. [Online]. Available:{' '}
            <a href="https://nextjs.org">https://nextjs.org</a>
          </li>
        </ol>
        <h2>Appendices</h2>
        <ul>
          <li>
            <Link href="#sitemap">
              <a>Site Map</a>
            </Link>
          </li>
          <li>
            <Link href="#wireframe">
              <a>Wireframe</a>
            </Link>
          </li>
        </ul>
        <h3 id="wireframe">Wireframe</h3>
        <h4>Main page</h4>
        <Image
          src={MainPageWireframe}
          alt="Wireframe main page"
          className="just-image"
        />
        <h4>Post page</h4>
        <Image
          src={PostWireframe}
          alt="Wireframe post page"
          className="just-image"
        />
        <h4>About me page</h4>
        <Image
          src={AboutMeWireframe}
          alt="Wireframe about me page"
          className="just-image"
        />
        <h4>Find photos page</h4>
        <Image
          src={FindPhotosWireframe}
          alt="Wireframe find photos page"
          className="just-image"
        />
        <h4>Report page</h4>
        <Image
          src={ReportWireframe}
          alt="Wireframe report page"
          className="just-image"
        />
        <h2 id="sitemap">Site Map</h2>
        <Link href="/sitemap.xml">
          <a>Download as XML</a>
        </Link>
        <Image
          src={SitemapImage}
          alt="Sitemap visualization"
          className="just-image"
        />
      </section>
    </Layout>
  );
}
