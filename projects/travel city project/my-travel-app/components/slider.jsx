import data from "../slider.json"
export default function Slider (){
    

    return(
        <div className="slider" style={{marginLeft:"10%",width:"90%",marginRight:"10%"}}>
<h2>Explore stays in trending destinations</h2>
<br/>

<div id="imgslider" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",marginRight:"10%",gap:"1.5%",overflowX:"auto",scrollbarWidth:"none"}}>
{data.map((e)=>{
    return(
        <div className="imgslider" key={e.id} style={{border:"1px solid gray",width:"100%",overflow:"hidden",borderRadius:"7px"}}>
    <img style={{height:"12rem"}} src={e.img}/>
    <div style={{marginLeft:"10px",marginBottom:"15px",marginTop:"15px"}}>
    <h3>{e.title}</h3>
    <p>{e.location}</p>
    </div>
    </div>
    )
}
)}

</div>

</div>
    )
}