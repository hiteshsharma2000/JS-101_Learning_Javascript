import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Todolist from './Todolist'
import Addtask from './Addtask'
function App() {
const[tasks,settasks]=useState([]);
const[loading,setloading]=useState(false);
const[page,setpage]=useState(1);
const[error,seterror]=useState(null);

const fetchtasks=async()=>{
  setloading(true)
  try {
   let responce= await axios.get(`http://localhost:5000/tasks?_limit=3&_page=${page}`);
   settasks(responce.data)
    // console.log(responce.data)
  } catch (error) {
    seterror(error)
  }
  finally{
    setloading(false)
  }
}
useEffect(()=>{
  fetchtasks();
},[page])

if(page===1){
  
}
  return (
    <>
    <button disabled={page===1} style={{marginRight:"20px"}} onClick={()=>setpage(page -1)}>
      prev</button>
    {page}
    <button style={{marginBottom:"100px",marginLeft:"20px"}} onClick={()=>setpage(page + 1)}>next</button>
     
    {error && <div>Eroor : {error}</div>}
    <Addtask fetchtasks={fetchtasks}/>
      {loading ? (<div>Loading....</div>):(<Todolist tasks={tasks} fetchtasks={fetchtasks}/>)}
     
     
    </>
  )
}

export default App
