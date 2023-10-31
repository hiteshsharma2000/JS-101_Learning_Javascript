import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counttime,setcounttime]=useState(0);

  useEffect(()=>{
    const intervelid=setInterval(() => {
      setcounttime((prev)=>{
        return prev + 1
      })
    }, 1000);
    return ()=>{
      clearInterval(intervelid)
    }
  },[counttime])

  return (
    <>
      <h1>
        Timer : {counttime}
      </h1>
    </>
  )
}

export default App
