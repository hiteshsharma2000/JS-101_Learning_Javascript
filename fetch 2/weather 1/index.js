async function fetchwheather(){

try {
    let APIKEY="0d149810644582a4ae9c51e36fb4cdbf";
    let city=document.getElementById("city").value;

    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
    let data=await res.json();
    console.log(data)

    let icon=document.getElementById("icon");
    let iconID=data.weather[0].icon;
    iconurl=`https://openweathermap.org/img/wn/${iconID}.png`
    icon.src=iconurl;

    let temp=document.getElementById("temp");
    temp.textContent=data.main.temp;
        let mintemp=document.getElementById("mintemp");
        mintemp.textContent=data.main.temp_min;
    let maxtemp=document.getElementById("maxtemp");
    maxtemp.textContent=data.main.temp_max;
    let pressure=document.getElementById("pressure");
    pressure.textContent=data.main.pressure;
    let windspeed=document.getElementById("windspeed");
    windspeed.textContent=data.wind.speed;
    let rise=document.getElementById("rise");
    rise.textContent=new Date(
        data.sys.sunrise *1000
    ).toLocaleTimeString();
       let set=document.getElementById("set");
       set.textContent=new Date(
        data.sys.sunset *1000
       ).toLocaleTimeString();
    let cloud=document.getElementById("cloud");
    cloud.textContent=data.clouds.all;

    let map=document.getElementById("Map");
    map.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    

} catch (error) {
    console.log(error)
}

}