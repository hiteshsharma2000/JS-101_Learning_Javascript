import { useState } from 'react'

import './App.css'
import Navbar from '../components/navbar'
import Travelsearch from '../components/searchflight'
import Slider from '../components/slider'
import Signup from '../components/signup'
import Footer from '../components/fotter'
import Bigimg from '../components/imagedisplay'
import Trips from '../components/trips'
import Deals from '../components/deals'
import Download from '../components/Appdownload'
import Trip2 from '../components/trip2'
import Home from "../pages/home"
import Signpage from '../pages/signin'

import { Route,Routes } from 'react-router-dom'
import DownloadApp from '../pages/download'

function App() {
  const[detail,setdetail]=useState({email:"",
  password:""})
  const[status,setstatus]=useState(false)
  const[login,setlogin]=useState(false)
  
const[inputdata,setinputdata]=useState({
  destination:"",
  date:"",
  passengers:""
})
  return (
    < div style={{backgroundColor:"#FFFFFF"}}>
      <Routes>

        <Route path='/' element={<Home detail={detail} setdetail={setdetail}  status={status} setstatus={setstatus} login={login} setlogin={setlogin} inputdata={inputdata} setinputdata={setinputdata}/>} />
     <Route path='/signin' element={<Signpage detail={detail} setdetail={setdetail} status={status} setstatus={setstatus} setlogin={setlogin} login={login}/>}/>
     <Route path='/download' element={<DownloadApp/>} />
      </Routes>
  
 
 
 
    </div>
  )
}

export default App
