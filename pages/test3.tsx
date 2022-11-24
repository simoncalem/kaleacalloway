import MuxPlayer from '@mux/mux-player-react'
import Vimeo from '@u-wave/react-vimeo'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const VimeoVideo = dynamic(() => import('../components/vimeo-video'))

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

  const ref = useRef(null)
  useEffect(() => {
    // 👇️ use a ref (best)
    muxRef = ref.current
  }, [])
  return (
    <div className="center grid grid-cols-1 justify-items-center">
      <div
        className="border-2 border-blue-500 block"
        onMouseOver={() => {
          muxRef.play()
        }}
        onMouseOut={() => {
          muxRef.pause()
        }}
      >
        <MuxPlayer
          playbackId={'jz015SdPKu1sNbYEVnWK7YUNVtEUVZ9iHsqKpI2oTmQk'}
          loop
          muted
          ref={ref}
        />
      </div>
      <button
        onClick={() => {
          muxRef.play()
        }}
      >
        PLAY VIDEO
      </button>
      <button
        onClick={() => {
          muxRef.pause()
        }}
      >
        PAUSE VIDEO
      </button>

      <div
        className="w-28 h-28 bg-blue-400 hover:bg-blue-700 hover:cursor-pointer"
        onMouseOver={() => {
          muxRef.play()
        }}
        onMouseOut={() => {
          muxRef.pause()
        }}
      ></div>
    </div>
  )
}
