import MuxPlayer from '@mux/mux-player-react'
import Vimeo from '@u-wave/react-vimeo'
import { useEffect, useRef, useState } from 'react'

import VimeoVideo from '../components/vimeo-video'

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

export default function Home() {
  const [active, setActive] = useState(true)

  const toggle = () => {
    setActive((active) => !active)
    console.log(active)
  }
  const ref = useRef(null)
  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current
    console.log(el2)
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
        <MuxPlayer
          playbackId={'sd8crKCGFKpUYN428yhNRRbGxUHntm1ztVMyiOuIsRA'}
          autoPlay={'muted'}
          controls
          loop
        />
        <div>
          <video
            ref={ref}
            key={'1'}
            loop
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
