import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counttime,setcounttiime]=useState(0);

  useEffect(()=>{
    const intervalid=setInterval(()=>{
      setcounttiime((previousval)=>{
        return previousval + 1 ;
      })
      
    },1000)
    const clear=()=>{
      clearInterval(intervalid)
    }
    return clear
  },[])

  return (
    <>
    
      <h1>Timer : {counttime}</h1>
    </>
  )
}

export default App
