import axios from "axios"

export default function Todolist({tasks,fetchtasks}){
const deletetask=async(id)=>{
    try {
        await axios.delete(`http://localhost:5000/tasks/${id}`)
    } catch (error) {
        console.log(error)
    }
    fetchtasks()
}

console.log(tasks)
return(
    
   <>
  
   {tasks.map((element) => (
    
       <tr key={element.id}>
        <td>
            {element.id}
        </td>
        < td>
            {element.title}
        </td>
      
        <td>
        <button onClick={()=>deletetask(element.id)}>Delete</button>
        </td>
       </tr>
        
   
   ))
   }
   </>
    
)
}