export default function Header() {
  return (
    <header className="py-8">
      <div className="flex items-baseline justify-between mx-auto">
        <a className="text-xl font-bold" title="Go to Homepage" href="/">
          Ilya Amelevich
        </a>
        <nav>
          <ul className="flex space-x-6 text-sm font-semibold">
            <li className="transition duration-200 ease-in-out opacity-75 hover:opacity-100">
              <a href="/">Blog</a>
            </li>
            <li className="transition duration-200 ease-in-out opacity-75 hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/ilya-amelevich-9a8443b6/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
