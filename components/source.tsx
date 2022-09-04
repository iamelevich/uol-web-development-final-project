import Link from 'next/link';

export default function Source({ name, link }: { name: string; link: string }) {
  return (
    <Link href={link}>
      <a
        className="text-slate-500 gradient-link"
        rel="source"
        target="_blank"
      >
        {name}
      </a>
    </Link>
  );
}
