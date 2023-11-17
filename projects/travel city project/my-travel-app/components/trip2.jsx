import data from "../trip2.json"
export default function Trip2(){
    return(
        <>
        <h1 style={{marginLeft:"10%"}}>Start planning your next trip</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr",width:"80%",marginLeft:"10%",gap:"2%",borderBottom:"1px solid gray"}}>
            
        {data.map((e)=>{
          return(
            <div key={e.id} style={{position:"relative"}} ><img style={{width:"100%",borderRadius:"7px 7px 7px 7px",filter:"brightness(.75)"}} src={e.img} alt="" />
        
          <br/> 
          <br/> 
          <h3 style={{color:"white",position:"absolute",bottom:"15%",
        left:"5%"  
        }}>{e.title}</h3></div>
          )
        })}
        
               </div>
              
               </>
        )
}