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
      </section>
    </Layout>
  );
}
