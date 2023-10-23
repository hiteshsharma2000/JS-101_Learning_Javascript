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
function  toggleStatus(id){
  const updateStatus = todoList.map((task)=>{
    if(task.id === id){
      return {...task,status: !task.status}
    }

    return task
  })

  settodoList(updateStatus);
}
function handleDelete(id){

  const newList=todoList.filter((task) => task.id !==id)
  
  settodoList(newList)
}

  return (
    <>
    <h1>Todo App</h1>
     <input onChange={inpvalue}></input>
     <button onClick={addtodo}>add todo</button>
   
    <div>
<Addlist tasks={todoList} ontogglestatus={toggleStatus} handleDelete={handleDelete}/>
    </div>
    </>
  )
}

export default App
