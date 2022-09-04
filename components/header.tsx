import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-8">
      <div className="flex items-baseline justify-between mx-auto">
        <Link href="./">
          <a className="text-xl font-bold gradient-link" title="Go to Homepage">
            Ilya Amelevich
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6 text-sm font-semibold">
            <li>
              <Link href="./about">
                <a className="gradient-link">About Me</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/ilya-amelevich-9a8443b6/">
                <a className="gradient-link" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
