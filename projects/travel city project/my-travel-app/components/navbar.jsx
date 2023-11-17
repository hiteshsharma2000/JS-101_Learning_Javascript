import { Link } from "react-router-dom"

export default function Navbar({login,setlogin}){
    function logout(){
setlogin(false)
    }
return(
<>

<div id="nav" style={{display:"flex",gap:"20px",backgroundColor:"#0A438B",color:"white",fontWeight:"600",position:"sticky",top:"0",position:"relative"}}>
    <div style={{display:"flex",marginLeft:"8%",padding:"0%"}}><img style={{width:"20%"}} src="https://tse1.mm.bing.net/th?id=OIP.ioxy0KmrSr0ckdqr2k0sDQHaCx&pid=Api&P=0&h=220"/>
    <select id="select" style={{background:"none",border:"0",marginLeft:"2%",fontWeight:"bold",fontSize:"14px"}}>
        <option value="" >More Travel</option>
        <option value="package" >Packages</option>
        <option value="Stays">Stays</option>
        <option value="Cars">Cars</option>
        <option value="Flights">Flights</option>
        <option value="Cruises">Cruises</option>
        <option value="Things to do">Things to do</option>
        <option value="Flights">Flights</option>
        
    </select></div>

<Link style={{backgroundColor:"white",color:"black",textDecoration:"none"
,padding:"5px",margin:"10px",borderRadius:"7px",marginLeft:"9%"}} to="/download"> <div > Get the app</div> </Link>
  
<div className="comp">List your property</div>
<div className="comp"><a style={{color:"white",textDecoration:"none"}} href="https://www.travelocity.com/helpcenter">Support</a></div>
<div className="comp">Trips</div>
<Link style={{textDecoration:"none",color:"white",marginTop:"10px"}} to="/signin"><div onClick={logout} style={{cursor:"pointer"}} className="comp">{login ? "Sign out":"Sign in"}</div></Link>


</div>

</>

)

}