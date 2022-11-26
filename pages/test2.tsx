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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    muxRef = ref.current
  }, [])
  return (
    <div>
      <div className="center grid grid-cols-1 justify-items-center">
        {/* <div className="relative">
          <div
            onMouseEnter={() => toggle()}
            onMouseLeave={toggle}
            className="absolute z-50 h-full w-full cursor-pointer saturate-50 backdrop-filter hover:saturate-100"
          ></div>
          <Vimeo
            video="https://vimeo.com/770272694"
            paused={active}
            loop
            muted
            dnt={true}
            controls={false}
            style={{
              boxShadow: '0 0 3px 2px red',
              position: 'relative',
            }}
          />
        </div>
        <div className="relative">
          <div
            onMouseEnter={() => toggle()}
            onMouseLeave={toggle}
            className="absolute z-50 h-full w-full cursor-pointer saturate-50 backdrop-filter hover:saturate-100"
          ></div>
          <Vimeo
            video="https://vimeo.com/770272694"
            paused={active}
            loop
            muted
            dnt={true}
            controls={false}
            style={{
              boxShadow: '0 0 3px 2px red',
              position: 'relative',
            }}
          />
        </div> */}
        <VimeoVideo
          videoSrc="https://vimeo.com/770272694"
          shadowColor="green"
        />
        <VimeoVideo
          videoSrc="https://vimeo.com/770294445"
          shadowColor={'blue'}
        />

        <VimeoVideo
          videoSrc="https://vimeo.com/771706414"
          shadowColor={'yellow'}
        />
        <div
          onMouseOver={() => {
            muxRef.play()
          }}
          onMouseOut={() => {
            muxRef.pause()
          }}
        >
          <MuxPlayer
            playbackId={'Ojz11wN2KWh7mz2Mgc2nvatL9KwYHP3M'}
            // autoPlay={'muted'}
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
        <div>
          <video
            key={'1'}
            loop
            preload={'auto'}
            // poster="https://img2.storyblok.com/0x400/f/88039/1920x1080/1c60450933/nyt_ttaj_76_ynyt0273000h_youtube-00_00_49_04-still004.jpg"
            onMouseOver={(e) => {
              ;(e.target as HTMLVideoElement).play()
              console.log('play')
            }}
            onMouseOut={(e) => {
              ;(e.target as HTMLVideoElement).pause()
              console.log('paused')
            }}
          >
            <source
              src="https://player.vimeo.com/external/611756883.sd.mp4?s=fc00181b131b4bf289e880dddc703b882f1a2f16&amp;profile_id=165"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  )
}
