import data from "../deals.json"
export default function Deals(){
return(
 
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",width:"78%",marginLeft:"10.8%",gap:"50px"}}>
        {data.map((e)=>{
            return(
               
                <div key={e.id} style={{position:"relative"}} ><img style={{width:"100%",borderRadius:"7px",filter:"brightness(.5)"}} src={e.img} alt="" />
                <div style={{position:"absolute",top:"25%",left:"3%" ,color:"white"}}>
                <h2>{e.title}</h2>
                <br/>
                <p>{e.description}</p>
                
                <button style={
                {backgroundColor:"white",
                color:"#0D5AB9",
                marginTop:"8px",
                padding:"8px",
                paddingLeft:"14px"
                ,paddingRight:"14px",
                border:"none",
                borderRadius:"7px",
                fontSize:"16px"
            }
                }>view details</button>
                </div>
                </div>
                
                
            )
        })}
    </div>

)
    
}