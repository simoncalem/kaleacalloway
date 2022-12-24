import Link from 'next/link'
import { useRef } from 'react'

import { PostProps } from '../types'
import Avatar from './avatar'
import CoverImage from './cover-image'
import Date from './date'
import MuxVideo from './mux-video'

export default function AllPosts(props: PostProps) {
  const { title, coverImage, date, excerpt, author, slug, video } = props

  const vidRef = useRef(null)
  const handlePlayVideo = () => {
    vidRef.current.play()
  }
  const handlePauseVideo = () => {
    vidRef.current.pause()
  }
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <MuxVideo playbackId={video?.playbackId} />
        {/* <CoverImage slug={slug} title={title} image={coverImage} priority /> */}
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
}
