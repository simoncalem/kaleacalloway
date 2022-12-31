import Link from 'next/link'
import { useRef } from 'react'

import { PostProps } from '../types'
import Avatar from './avatar'
import CoverImage from './cover-image'
import Date from './date'
import MuxPlayerComponent from './mux-player-component'
import MuxVideo from './mux-video'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  video,
}: PostProps) {
  const vidRef = useRef(null)
  const handlePlayVideo = () => {
    vidRef.current.play()
  }
  const handlePauseVideo = () => {
    vidRef.current.pause()
  }
  return (
    <div>
      <div className="mb-5">
        <MuxVideo playbackId={video?.playbackId}></MuxVideo>
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline hover:decoration-1 hover:underline-offset-4"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
