import Link from 'next/link';

export default function Author({ name, link }: { name: string; link: string }) {
  return (
    <Link href={link}>
      <a
        className="text-slate-500 gradient-link"
        rel="author"
        target="_blank"
      >
        {name}
      </a>
    </Link>
  );
}
