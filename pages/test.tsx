import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'

export default function Home() {
  const [score, setScore] = useState(0)
  const increaseScore = () => setScore(score + 1)

  return (
    <div>
      <p>Your score is {score}</p>
      <button onClick={increaseScore}>+</button>
      <div className="w-[600px] mx-auto overflow-hidden hover:scale-105 transition-transform cursor-pointer hover:cursor-pointer hover:rounded-md">
        <div className="scale-105 hover:scale-100 transition-transform">
          <Vimeo
            video="https://vimeo.com/735829448/25c2279ee1"
            autoplay
            background
            loop
            responsive
          />
        </div>
      </div>
    </div>
  )
}
