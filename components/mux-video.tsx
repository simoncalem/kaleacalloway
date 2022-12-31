import MuxPlayer from '@mux/mux-player-react'
import { useEffect, useRef } from 'react'

export default function MuxVideo(props) {
  const { playbackId, thumbnailTime = 0.0, videoAspectRatio = '16/9' } = props
  const vidRef = useRef(null)

  useEffect(() => {
    const handlePlayVideo = () => {
      vidRef.current.play()
    }
    const handlePauseVideo = () => {
      vidRef.current.pause()
    }
    vidRef.current.addEventListener('mouseover', handlePlayVideo)
    vidRef.current.addEventListener('mouseout', handlePauseVideo)
    return () => {
      vidRef.current.removeEventListener('mouseover', handlePlayVideo)
      vidRef.current.removeEventListener('mouseout', handlePauseVideo)
    }
  }, [])

  return (
    <MuxPlayer
      playbackId={playbackId}
      loop
      muted
      ref={vidRef}
      thumbnailTime={thumbnailTime}
      style={{
        height: '100%',
        maxWidth: '100%',
        lineHeight: '0px',
        aspectRatio: `${videoAspectRatio.replace(':', '/')}`,
        display: 'flex',
        cursor: 'pointer',
      }}
    />
  )
}
