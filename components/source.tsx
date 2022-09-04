import Link from 'next/link';

export default function Source({ name, link }: { name: string; link: string }) {
  return (
    <Link href={link}>
      <a
        className="text-slate-500 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text hover:text-transparent"
        rel="source"
        target="_blank"
      >
        {name}
      </a>
    </Link>
  );
}
