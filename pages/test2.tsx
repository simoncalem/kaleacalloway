import Vimeo from '@u-wave/react-vimeo'
import { useState } from 'react'

const Message = ({ active }) => {
  return <h1>The switch is {active ? 'active' : 'disabled'}</h1>
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
    <div onMouseEnter={() => toggle()} onMouseLeave={toggle}>
      <Switch active={active} onToggle={toggle} />
      <Vimeo
        video="https://vimeo.com/735829448/25c2279ee1"
        paused={active}
        loop
        muted
      />
    </div>
  )
}
