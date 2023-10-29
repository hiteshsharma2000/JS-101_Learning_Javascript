import axios from "axios";
import { useState } from "react"

export default function Addtask({fetchtasks}){
const[val,setval]=useState("");
const addtask =async()=>{
    try {
        await axios.post("http://localhost:5000/tasks",{
        title:val,
        completed:false,
        
        })
        fetchtasks();
        setval("");
    } catch (error) {
        console.log(error)
    }
}

     return(
        <>
        <div>
            <input value={val} onChange={(e)=> setval(e.target.value)}/>
            <button onClick={addtask}>Add</button>
        </div>
        </>
     )
}