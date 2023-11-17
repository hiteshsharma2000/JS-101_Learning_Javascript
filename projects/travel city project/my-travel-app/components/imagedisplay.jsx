import data from "../trips.json"
export default function Bigimg(){
    return(

        <div style={{width:"80%",marginLeft:"10%",position:"relative",color:"white" }}> <img style={{width:"100%",borderRadius:"7px",filter:"brightness(.5)"}} src="https://a.travel-assets.com/travel-assets-manager/cread-2270/PortfolioVoltron-HP-Hero-D-928x398.jpg?impolicy=fcrop&w=1400&h=600&q=mediumHigh" alt="" />
      <div style={{position:"absolute",top:"29%",marginLeft:"5%"}}>
        <h1 style={{fontSize:"38px"}} >Get more out of your<br/>travel</h1>
        <br/>
        <p >Earn rewards. Go farther. Travelocity is now a part of <br/> Expedia.</p>
        <br/>
        <button  style={{backgroundColor:"#0D5AB9",height:"50px",color:"white",padding:"15px",borderRadius:"5px",cursor:"pointer"
        ,border:"none"
        ,fontWeight:"bold"
       }} ><a style={{textDecoration:"none",color:"white"}} href="https://www.expedia.com/welcome-one-key?rfrr=OneKey.HP.HeroBanner">Join Expedia Now</a></button></div>
   
        </div>
    )
}