import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addlist from './component/list'

function App() {
  const [input, setinput] = useState("");
const[todoList,settodoList]=useState([]);
function inpvalue(e){
  
    setinput(e.target.value)
    console.log(input)
}
function addtodo(){
  
    let obj = {
      id: new Date().getTime(),
      todo: input,
      status: false,

    }
    let newList = [...todoList, obj]
    settodoList(newList);
    console.log(newList)
    
  
}

  return (

    <>
    <h1>Todo app</h1>
     <input onChange={inpvalue}></input>
     <button onClick={addtodo}>add todo</button>
   
    <div>
<Addlist tasks={todoList}/>
    </div>
    </>
  )
}

export default App
