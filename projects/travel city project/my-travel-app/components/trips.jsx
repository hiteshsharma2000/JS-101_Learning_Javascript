import data from "../trips.json"

export default function Trips(){
    return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr",width:"80%",marginLeft:"10%",gap:"2%"}}>
        {data.map((e)=>{
          return(
            <div key={e.id} style={{position:"relative"}} ><img style={{width:"100%",borderRadius:"7px 7px 0px 0px",filter:"brightness(.95)"}} src={e.img} alt="" />
          <div style={{position:"absolute",bottom:"30%",left:"3%",color:"white"}}> <h3 >{e.title}</h3></div>
          <br/> 
          <br/> 
          <p style={{color:"gray"}}>{e.description}</p></div>
          )
        })}
               </div>
    )
}