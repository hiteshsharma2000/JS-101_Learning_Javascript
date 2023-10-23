import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")

function inputchange(e){
  setText(e.target.value)
}
function clean(){
  
 document.getElementById('inp').value="",  
   setText("")
  }
  return (
    <>
     <input id='inp' onChange={inputchange}></input>
     <h2>{text}</h2>
     <button onClick={clean}>Clear</button>
    </>
  )
}

export default App
