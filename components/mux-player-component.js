import MuxPlayer from '@mux/mux-player-react'
import { useRef } from 'react'

const MuxPlayerComponent = (props) => {
  const { playbackId, thumbnailTime = 0.0 } = props
  const playerRef = useRef
  return (
    <MuxPlayer
      ref={playerRef}
      playbackId={playbackId}
      loop
      muted
      thumbnailTime={thumbnailTime}
      style={{
        height: '100%',
        maxWidth: '100%',
        border: '1px solid red',
        lineHeight: '0px',
      }}
    />
  )
}

export default MuxPlayerComponent
