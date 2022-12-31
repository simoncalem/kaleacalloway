import Link from 'next/link'

export default function Header({ title }) {
  return (
    <h2 className="mt-8 mb-20 text-2xl font-bold md:text-4xl ">
      <Link href="/" className="hover:underline hover:decoration-1">
        {title}
      </Link>
    </h2>
  )
}
