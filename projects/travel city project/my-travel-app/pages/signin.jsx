import { useState } from "react";
import Signup from "../components/signup";


export default function Signpage({detail,setdetail,status,setstatus,setlogin,login
}){
  
    return(
        <Signup detail={detail} setdetail={setdetail} status={status} setstatus={setstatus} setlogin={setlogin} login={login}/>
    )
}