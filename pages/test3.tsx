import MuxPlayer from '@mux/mux-player-react'
import { useRef, useState } from 'react'

const Message = ({ active }) => {
  return <h1>The video is {active ? 'disabled' : 'active'}</h1>
}

const Button = ({ onToggle }) => {
  return <button onClick={onToggle}>Change</button>
}

const Switch = ({ active, onToggle }) => {
  return (
    <div>
      <Message active={active} />
      <Button onToggle={onToggle} />
    </div>
  )
}
let muxRef

export default function Home(muxRef) {
  const [active, setActive] = useState(true)

  const toggle = () => {
    setActive((active) => !active)
    console.log(active)
  }

  const vidRef = useRef(null)
  const handlePlayVideo = () => {
    vidRef.current.play()
  }
  const handlePauseVideo = () => {
    vidRef.current.pause()
  }
  return (
    <div className="center grid grid-cols-1 justify-items-center">
      <div
        className="border-2 border-blue-500 block"
        onMouseOver={() => {
          handlePlayVideo()
        }}
        onMouseOut={() => {
          handlePauseVideo()
        }}
      >
        <MuxPlayer
          playbackId={'Ojz11wN2KWh7mz2Mgc2nvatL9KwYHP3M'}
          loop
          muted
          ref={vidRef}
        />
      </div>

      <div
        className="w-28 h-28 bg-blue-400 hover:bg-blue-700 hover:cursor-pointer"
        onMouseOver={() => {
          handlePlayVideo()
        }}
        onMouseOut={() => {
          handlePauseVideo()
        }}
      ></div>
    </div>
  )
}
