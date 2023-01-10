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
  // @ts-ignore
  videoAspectRatio,
}: PostProps) {
  const vidRef = useRef(null)
  const handlePlayVideo = () => {
    vidRef.current.play()
  }
  const handlePauseVideo = () => {
    vidRef.current.pause()
  }
  return (
    <div className="group md:first:col-span-2 h-min">
      <div className="mb-1 group-hover:shadow-[#ffffff2d] group-hover:shadow-2xl">
        <div className="hidden md:block">
          <MuxVideo
            playbackId={video?.playbackId}
            videoAspectRatio={videoAspectRatio}
          ></MuxVideo>
        </div>
        <CoverImage title={title} image={coverImage} />
      </div>
      <h3 className="mb-1 text-sm tracking-tighter leading-snug opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150 after:hover:text-transparent after:hover:shadow-white  ">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline font-fragment decoration-1 underline-offset-4 after:content-['🔗'] after:font-fragment"
        >
          {title}
          {/* {videoAspectRatio} */}
        </Link>
      </h3>
      {/* <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div> */}
      {/* <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />} */}
    </div>
  )
}
