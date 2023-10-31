import React from "react"
import { useState,useEffect } from "react"
export default function Timer(){
    const [count, setCount] = useState(0)
  
    useEffect(()=>{
      const intervalid=setInterval(()=>{
        setCount((prev)=>{
          return prev + 1
        })
      },1000)
      return ()=>{
        clearInterval(intervalid)
      }
    },[])
    return(
      <>
      Timer : {count}
      </>
    )
    }