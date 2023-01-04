import MuxPlayer from '@mux/mux-player-react'
import { useCallback, useEffect, useRef } from 'react'

const videoStyles = {
  height: '100%',
  maxWidth: '100%',
  lineHeight: '0px',
  display: 'flex',
  cursor: 'pointer',
}

export default function MuxVideo(props) {
  const { playbackId, thumbnailTime = 0.0, videoAspectRatio = '16/9' } = props
  const vidRef = useRef(null)

  const handlePlayVideo = useCallback(() => {
    vidRef.current.play()
  }, [])

  const handlePauseVideo = useCallback(() => {
    vidRef.current.pause()
  }, [])

  useEffect(() => {
    vidRef.current.addEventListener('mouseover', handlePlayVideo)
    vidRef.current.addEventListener('mouseout', handlePauseVideo)
    return () => {
      vidRef.current.removeEventListener('mouseover', handlePlayVideo)
      vidRef.current.removeEventListener('mouseout', handlePauseVideo)
    }
  }, [handlePlayVideo, handlePauseVideo])

  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType={'on-demand'}
      loop
      muted
      preload={'auto'}
      ref={vidRef}
      envKey={'potvukgqnmdjcurjum4jmij0l'}
      thumbnailTime={thumbnailTime}
      style={{
        ...videoStyles,
        aspectRatio: `${videoAspectRatio.replace(':', '/')}`,
      }}
    />
  )
}
