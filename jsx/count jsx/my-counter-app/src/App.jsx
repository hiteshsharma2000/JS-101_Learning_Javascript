import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleclick(){
    setCount(count+1)
  }

  return (
    <>
      <h2>count : {count}</h2>
      <button onClick={handleclick}>click</button>
    </>
  )
}

export default App
