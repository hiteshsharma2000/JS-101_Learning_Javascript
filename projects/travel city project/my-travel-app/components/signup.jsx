import { useState } from "react"
import { Link } from "react-router-dom"

export default function Signup({detail,setdetail,setlogin,login}){
 const[status,setstatus]=useState(false)
function storedata(e){

    setdetail({
        ...detail,
        [e.target.name]:e.target.value
    })
   
}
function printdata(){
    console.log(detail)
    setlogin(true)
    
}
function changestatus(){
    return(
setstatus(!status)
    )
}

   
    return(
        <div style={{fontFamily:"Poppins, sans-serif"}}>
  
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"#FFFFFF",boxShadow:" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}> <img style={{width:"90px",paddingBottom:"5px",paddingTop:"5px"}} src="https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001&2" alt="" /></div>
 <br/>
 <br/>
 <div style={{margin:"auto",width:"28%"}}>
 <h2 style={{fontSize:"bolder"}}>Sign in</h2>
 <br/>
 
 <input style={{paddingLeft:"1.5%",width:"90%",marginLeft:"2.5%",height:"40px",
borderRadius:"5px"}} name="email" onChange={storedata} value={detail.email} type="email"
placeholder="Email address"/>
 
 <br/>
 <br/>
 <input style={{paddingLeft:"1.5%",width:"90%",marginLeft:"2.5%",height:"40px",
borderRadius:"5px"}} name="password" onChange={storedata} value={detail.password} type="password"
placeholder="Password"/>
 <br/>
 <br/>
<div style={{display:"flex"}}>
 <input onClick={changestatus}  type="checkbox"/> <p style={{marginLeft:"15px",fontSize:"18px",color:"gray",
}}> Keep me signed in</p>
 </div>


 
 {status && (<p style={{fontSize:"12px"}}>
 <br/>
 <br/>
 Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.
 </p>)}
 <br/>
 <br/>
 <br/>
 <p>By signing in, I agree to the Travelocity <a href="https://www.travelocity.com/lp/lg-terms">Terms and Conditions</a> and <a href="https://www.travelocity.com/lp/b/lg-privacypolicy">Privacy Statement.</a></p>
<br/>
<br/>
<Link style={{textDecoration:"none",
color:"white"

}} to="/">
<button
  style={{width:"90%",marginLeft:"2.5%",backgroundColor:"#0A438B",
color:"white",height:"45px",
border:"none",
fontWeight:"bold",
borderRadius:"5px"
}} disabled={detail.password==="" || detail.email===""}
 onClick={printdata}>Sign in</button>
 </Link>
<br/>
<br/>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
<a href="https://www.travelocity.com/forgotpassword?ckoflag=0&uurl=e3id%3Dredr%26rurl%3D%2F%3Flogout%3D1&enable_ulfp=true">Forgot password?</a>
<br/>
<br/>

<p >Don't have an account?
<a href=""
 style={{textDecoration:"none"}}> Create one</a></p>
 <br/>

 <p>or continue with</p>
 <br/>
 <div>
    <img style={{width:"20px",height:"20px",marginRight:"15px"}} src="https://a.travel-assets.com/egds/marks/apple.svg" alt="" />
    <img style={{width:"20px",height:"20px"}} src="https://a.travel-assets.com/egds/marks/facebook.svg" alt="" />
 </div>
 </div>
 </div>
        </div>
    )
}