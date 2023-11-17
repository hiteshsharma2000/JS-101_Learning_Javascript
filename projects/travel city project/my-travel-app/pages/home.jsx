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
export default function Home({detail,setdetail,status,setstatus,login,inputdata,setinputdata,setlogin}){
    return(
        <>
         <Navbar login={login} setlogin={setlogin}/>
  <br/>
  <br/>
  
  <Travelsearch detail={detail} setdetail={setdetail}  status={status} setstatus={setstatus} login={login} inputdata={inputdata} setinputdata={setinputdata}/>
  <br/>
  <Slider />
  <br/>
  <br/>
  <br/>

  <Bigimg/>
  <br/>
  <br/>
  <br/>
  <Trips/>
  <br/>
  <br/>
  <Deals/>
  <br/>
  <br/>
  <Trip2/>
  <br/>
  <br/>
  <Download/>
  
  <br/>
  <br/>
 
  

  {/* <Signup/> */}
  <Footer/>
  <br/>
 </>
    )
}