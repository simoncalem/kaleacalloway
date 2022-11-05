import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'

export default function Home() {
  const [score, setScore] = useState(0)
  const increaseScore = () => setScore(score + 1)

  return (
    <div>
      <p>Your score is {score}</p>
      <button onClick={increaseScore}>+</button>
      <Vimeo
        video="https://vimeo.com/735829448/25c2279ee1"
        autoplay
        background
        loop
        responsive
      />
    </div>
  )
}
