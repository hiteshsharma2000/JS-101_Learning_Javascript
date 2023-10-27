import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

useEffect(()=>{
  document.title=`Clicked ${count} times`
})
  

  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={()=>{setCount(count + 1)}}>INCREASE COUNT</button>
    <button onClick={()=>{setCount(count - 1)}}>DECREASE COUNT</button>
    </>
   
  )
}

export default App
