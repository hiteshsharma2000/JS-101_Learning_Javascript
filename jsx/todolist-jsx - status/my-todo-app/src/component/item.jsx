function Additem({data,ontogglestatus}){
    return(
        <tr >
            <td>{data.todo}</td>
           
            <td style={{color: data.status?"green":"red"}}>{data.status?"True":"False"}</td>
            <td><button onClick={()=>ontogglestatus(data.id)}>Toggle</button></td>
        </tr>
    )
}

export default Additem