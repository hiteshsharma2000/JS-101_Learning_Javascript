import Additem from "./item"

function Addlist({tasks,ontogglestatus,handleDelete}){
    return(
        <>
        <table>
        <thead>
        <td>TASK NAME</td>
        <td>Status</td>
        <td>Toggle change</td>
        <td>Delete</td>
         
        </thead>
    <tbody>
    {
        tasks.map((data)=>(
            <tr key={data.id}>
         
            <td>{data.todo}</td>
           
            <td style={{color: data.status?"green":"red"}}>{data.status?"True":"False"}</td>
            <td><button onClick={()=>ontogglestatus(data.id)}><img className="toglelogo"src="https://tse2.mm.bing.net/th?id=OIP.10IUWK0xNI90xla6csaUGAHaHx&pid=Api&P=0&h=220"></img></button></td>
            <td><button onClick={()=>handleDelete(data.id)} >delete</button></td>

            {/* // <Additem key={e.id} data={e} ontogglestatus={ontogglestatus}/> */}
           </tr> 
          
        ))
 }
    
    </tbody>
     
        </table>
        </>
    )
    
}


export default Addlist

