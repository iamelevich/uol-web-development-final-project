import Head from 'next/head';
import Layout from '../components/layout';

export default function Report() {
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
          <li>And nothing more I think, cause this website super simple</li>
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
            Read about remark and how it can be used for parsing Markdown and
            converting it to the HTML
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
          some static generation - yes, but make it staic - no.
        </p>

        <h2>What resources were used when creating your work?</h2>
        <p>
          I have used only documentation of libraries/frameworks that I used. This is: <a href="https://nextjs.org">Next.js</a> and <a href="https://tailwindcss.com">TailwindCSS</a>.
        </p>
      </section>
    </Layout>
  );
}
