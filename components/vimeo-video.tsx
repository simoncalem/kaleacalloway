import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'

export default function VimeoVideo({ videoSrc, shadowColor }) {
  const [active, setActive] = useState(true)

  const toggle = () => {
    setActive((active) => !active)
    console.log(active)
  }
  return (
    <div>
      <div className="center grid grid-cols-1 justify-items-center">
        <div className="relative">
          <div
            onMouseEnter={() => toggle()}
            onMouseLeave={toggle}
            className="absolute z-50 h-full w-full cursor-pointer saturate-50 backdrop-filter hover:saturate-100"
          ></div>
          <Vimeo
            video={videoSrc}
            paused={active}
            loop
            muted
            dnt={true}
            controls={false}
            style={{
              boxShadow: `0 0 3px 2px ${shadowColor}`,
              position: 'relative',
            }}
          />
        </div>
      </div>
    </div>
  )
}
