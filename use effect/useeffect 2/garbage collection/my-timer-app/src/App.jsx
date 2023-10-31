import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './component/Timer'
import './App.css'

function App() {
  const [showtimer,setshowtimer]=useState(true)
   
  return (
    <>
    <button onClick={()=>{
      setshowtimer(!showtimer)
    }}>{showtimer ? 'hide timer':'show timer'
    }</button>
    <h1>
      {showtimer && <Timer/>}
    </h1>
    </>
  )
}

export default App
