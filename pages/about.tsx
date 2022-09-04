import Head from 'next/head';
import Layout from '../components/layout';
import Image from 'next/image';
import myPhoto from '../public/images/my_photo.jpg';

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
        <p>
          This page is about me, so lower you can find some info about my
          professional expirience
        </p>
      </section>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
        <Image
          src={myPhoto}
          alt="My photo"
          className="rounded-full transition ease-in-out delay-150 duration-1000 hover:rotate-180"
        />
        <div className="text-center">
          <h2 className="text-2xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Details
          </h2>
          <ul>
            <li className="mb-2">
              <a
                href="mailto:ilya.amelevich@gmail.com"
                className="gradient-link"
              >
                ilya.amelevich@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/in/ilya-amelevich-9a8443b6/"
                className="gradient-link mr-2"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/iamelevich" className="gradient-link">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="text-sm text-slate-500">Place of Birth</li>
            <li className="mb-2">Belarus</li>
            <li className="text-sm text-slate-500">
              I{"'"}m a software engineer who solves problems. I can get
              requirements from businesses and write fast, readable and working
              code. I am an old hand at development of high-load,
              micro-services, and monolithic architectures. You just need to
              describe me the problem and I{"'"}ll find a way to fix it.
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <ul>
            <li className="cv-badge">Node.js</li>
            <li className="cv-badge">Golang</li>
            <li className="cv-badge">Typescript</li>
            <li className="cv-badge">JavaScript</li>
            <li className="cv-badge">Next.js</li>
            <li className="cv-badge">Nest.js</li>
            <li className="cv-badge">MongoDB</li>
            <li className="cv-badge">Redis</li>
            <li className="cv-badge">Kafka</li>
            <li className="cv-badge">Docker</li>
            <li className="cv-badge">Git</li>
            <li className="cv-badge">React</li>
            <li className="cv-badge">Vue.js</li>
            <li className="cv-badge">MySql</li>
            <li className="cv-badge">PHP</li>
            <li className="cv-badge">ReactNative</li>
            <li className="cv-badge">CI/CD</li>
            <li className="cv-badge">Kubernetes</li>
            <li className="cv-badge">Terraform</li>
            <li className="cv-badge">AWS</li>
            <li className="cv-badge">Prometheus</li>
            <li className="cv-badge">Grafana</li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Languages
          </h2>
          <ul className="mb-2">
            <li className="cv-badge">Russian</li>
            <li className="cv-badge">Belarusian</li>
            <li className="cv-badge">English</li>
            <li className="cv-badge">Polish</li>
          </ul>

          <h2 className="text-2xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Hobbies
          </h2>
          <ul>
            <li className="cv-badge">Travelling</li>
            <li className="cv-badge">Board games</li>
            <li className="cv-badge">Programming</li>
          </ul>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-2xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Employment History
        </h2>
        <div className="my-4">
          <h3 className="text-lg font-extrabold leading-tight">
            Senior Node.js/GoLang Engineer at Vitafy GmbH (Germany), Remote
          </h3>
          <p className="text-right text-sm text-slate-400">
            March 2022 - present
          </p>
          <ul className="list-disc text-left ml-10">
            <li>Support and develop clod architecture</li>
            <li>
              Create new architecture of the E-commerce shops and implement it
            </li>
            <li>Support and develop CI/CD pipelines</li>
            <li>Maintain some monorepos with Rush</li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-extrabold leading-tight">
            Senior Node.js/GoLang Engineer at PlutoTV (USA), Remote
          </h3>
          <p className="text-right text-sm text-slate-400">
            December 2018 - March 2022
          </p>
          <ul className="list-disc text-left ml-10">
            <li>
              Designed and implemented the analytic events delivery system using
              GoLang and Kafka.
            </li>
            <li>Designed a logging system using Kafka and Vector.</li>
            <li>
              Made performance improvements for different micro-services using
              Redis,
            </li>
            <li>MongoDB, and Kafka.</li>
            <li>
              Took part in moving from monolithic to microservice architecture.
            </li>
            <li>
              Created and supported libraries for logging and configuration of
              services (Node.js and GoLang).
            </li>
            <li>Helped with the configuration of CI/CD for some services.</li>
            <li>Took part in an interview process.</li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-extrabold leading-tight">
            Node.js Mentor at foxminded (Ukraine), Remote
          </h3>
          <p className="text-right text-sm text-slate-400">
            October 2021 - March 2022
          </p>
          <ul className="list-disc text-left ml-10">
            <li>Answer students questions and make a code review.</li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-extrabold leading-tight">
            R{'&'}D Engineer at Hola (Israel), Remote
          </h3>
          <p className="text-right text-sm text-slate-400">
            July 2018 — December 2018
          </p>
          <ul className="list-disc text-left ml-10">
            <li>
              Took part in the development of the Hola Phone application using
              React Native and Node.js.
            </li>
            <li>
              Implemented Speech-To-Text function for voice messages in the Hola
              Phone application.
            </li>
            <li>
              Made some performance improvements (including CPU/Memory usage
              modal window for developer{"'"}s purposes).
            </li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-extrabold leading-tight">
            Senior Node.js Engineer at Skywind Group (Belarus), Minsk
          </h3>
          <p className="text-right text-sm text-slate-400">
            August 2017 — June 2018
          </p>
          <ul className="list-disc text-left ml-10">
            <li>Implemented back-end for a few Slot games.</li>
            <li>Made unit tests of the Slot games with coverage 100%.</li>
            <li>
              Made tests of the Slot games to be the same as the math model for
              it.
            </li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-extrabold leading-tight">
            Fullstack Engineer at XB Software (Belarus), Minsk
          </h3>
          <p className="text-right text-sm text-slate-400">
            August 2016 — August 2017
          </p>
          <ul className="list-disc text-left ml-10">
            <li>
              Was responsible for the part of the main site of the application (
              <a href="https://www.ceicdata.com/" className="gradient-link">
                https://www.ceicdata.com/
              </a>
              ).
            </li>
            <li>
              Utilized pure JavaScript to create the admin panel for marketing
              specialists where, with the help of simple custom query language,
              they can create templates for different pages with data from DB.
            </li>
            <li>
              Made server rendering for charts to prevent stealing the data.
            </li>
            <li>Made integration with a payment gateway.</li>
          </ul>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-extrabold leading-tight">
            Fullstack Engineer at iKantam (Belarus), Minsk
          </h3>
          <p className="text-right text-sm text-slate-400">
            May 2015 — August 2016
          </p>
          <ul className="list-disc text-left ml-10">
            <li>Worked on some projects (Upwork).</li>
            <li>
              A system that automates social media management (
              <a href="http://smintly.com/" className="gradient-link">
                http://smintly.com/
              </a>
              ) (PHP + JS on frontend):
            </li>
            <ul className="list-disc text-left ml-10">
              <li>
                Made full refactoring of the system that allows a user to
                leverage multiple accounts in social media.
              </li>
              <li>Updated frontend for the new design.</li>
              <li>Created constructor for social media posts.</li>
              <li>
                Made a lot of different improvements including performance.
              </li>
              <li>
                Admin panel with API that helps to split payment transactions
                based on the predefined logic (Node.js, MongoDB, Angular) was
                created from scratch in a few months only by me.
              </li>
            </ul>
            <li>
              Marketplace for cars in the USA (PHP + Angular). The customer was
              also a developer so we worked together:
            </li>
            <ul className="list-disc text-left ml-10">
              <li>Implemented a new design.</li>
              <li>
                A lot of updates in the DB structure and in back-end code.
              </li>
            </ul>
            <li>
              Service that allows you to use a Tesla as a taxi written in
              Meteor.js:
            </li>
            <ul className="list-disc text-left ml-10">
              <li>Some fixes in the order process.</li>
            </ul>
            <li>Marketplace for beauty goods (PHP + Angular):</li>
            <ul className="list-disc text-left ml-10">
              <li>Categories and Product pages.</li>
              <li>Sorting and filtering of the categories and products.</li>
            </ul>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
