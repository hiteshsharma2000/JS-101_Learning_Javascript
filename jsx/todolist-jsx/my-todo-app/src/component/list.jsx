function Addlist({tasks}){
    return(
        <>
        <table>
        <thead>
        <td>TASK NAME</td>
        <td>Status</td>
         
        </thead>
    <tbody>
    {
        tasks.map((e)=>(
         



                <tr key={e.id}>
                    <td>
                        {e.todo}
                    </td>
                    <td>
                        {e.status ? "true":"false"}
                    </td>
                </tr>

          
        ))
 }
    
    </tbody>
     
        </table>
        </>
    )
}
export default Addlist

