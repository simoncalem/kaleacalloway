import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'

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
      </div>
    </div>
  )
}
