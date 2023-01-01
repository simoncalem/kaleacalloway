import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function BlogHeader({ title }) {
  return (
    <section className="mt-16 mb-10 flex flex-col items-center  md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-2xl font-bold font-mono md:pr-8 md:text-4xl">
        {title}
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left font-mono">
        Cinematographer
      </h4>
    </section>
  )
}
