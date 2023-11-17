import { useState } from "react"

export default function Travelsearch({detail,setdetail,status,setstatus,login,inputdata,setinputdata}){
    const[fromplace,setfromplace]=useState(false);
    function check(){
    return(    
        setfromplace(!fromplace)
    )
    }
    function savedata(e){
        setinputdata({
            ...inputdata,
            [e.target.name]:e.target.value

            
        })
    }
    function search(){
        if(login){
            alert("log in succesfully")
          
            console.log(inputdata)
        }else{
            alert("please login ")
            
            
        }
    }

    
    return(
        <div style={{border:'1px solid gray',borderRadius:"7px",marginLeft:"10%",marginRight:"10%"}}>
        <div id="option" style={{display:"flex",gap:"30px",justifyContent:"center",borderBottom:'1px solid gray',padding:"20px",fontSize:"15px",fontWeight:"bold"}}>
            <div className="navlink">Stays</div>
            <div className="navlink">Flights</div>
            <div className="navlink">Cars</div>
            <div className="navlink">Packages</div>
            <div className="navlink">Things to do</div>
            <div className="navlink">Cruises</div>
            </div>
            <br/>
            <div style={{display:"flex",justifyContent:"space-around",gap:"5px",paddingTop:"5px",padding:"20px",paddingBottom:"25px"}} >
            
        <input type="place" name="destination" onChange={savedata} value={inputdata.destination} style={{width:"28%",height:"2.6rem",borderRadius:"5px",paddingLeft:".8%",border:'1px solid gray'}} placeholder="Going to"/>
        <input type="date" name="date" onChange={savedata} value={inputdata.date} style={{width:"28%",height:"2.7rem",borderRadius:"5px",border:'1px solid gray',paddingLeft:".8%"}} placeholder="17 Nov - 14 Dec"/>
        <input type="option" name="passengers" onChange={savedata} value={inputdata.passengers} style={{width:"28%",height:"2.6rem",borderRadius:"5px",border:'1px solid gray',paddingLeft:".8%"}} placeholder="no. of passengrers "/>
        <button style={{width:"7%",height:"3rem",borderRadius:"5px",backgroundColor:"#0D5AB9",color:"white",border:"none"}} 
        onClick={search}>
<a href="https://www.travelocity.com/Hotel-Search?adults=2&d1=2023-11-28&d2=2023-11-29&destination=Alibaug%2C%20Maharashtra%2C%20India&endDate=2023-11-29&latLong=18.648917%2C72.881337&regionId=6138517&rooms=1&semdtl=&sort=RECOMMENDED&startDate=2023-11-28&theme=&useRewards=false&userIntent="
 style={{color:"white",textDecoration:"none",pointerEvents: !login && "none"}} > Search</a>

       </button>
       
       <br/>
     
        </div>
        <div style={{display:"flex",marginLeft:"2%",marginBottom:"2%",gap:"2%"}}>
        <div style={{display:"flex"}}>
        <input style={{width:"100px",marginRight:"-30px",accentColor:"#0D5AB9"}} onClick={check} type="checkbox" /> <p>Add a flight</p></div>
        <div style={{display:"flex"}}>
        <input style={{width:"100px",marginRight:"-30px",accentColor:"#0D5AB9"}} type="checkbox" /> <p>Add a car</p></div>
        </div>
        {fromplace && (<input placeholder="Leaving from" style={{marginLeft:"2.5%",
        marginBottom:"2%",width:"27%",height:"2.6rem",borderRadius:"5px",paddingLeft:".5%",border:'1px solid gray'}}/>)}
        </div>
    )
}