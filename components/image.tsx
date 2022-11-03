import cn from 'classnames'
import Img from 'next/image'
import Link from 'next/link'

import { urlForImage } from '../lib/sanity'

interface ImageProps {
  title: string
  slug?: string
  alt?: string
  image: any
  priority?: boolean
}

export default function Image(props: ImageProps) {
  const { title, slug, image: source, priority, alt } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Img
        className="h-auto w-full"
        width={2000}
        height={1500}
        alt={alt}
        src={urlForImage(source).height(1500).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
