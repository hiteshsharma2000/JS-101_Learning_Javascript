async function fetchforecast(city) {
    try {
        let APIKEY="0d149810644582a4ae9c51e36fb4cdbf";
        let city=document.getElementById("city").value;
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`
      );
      let data = await res.json();
      console.log(data);
      const forecast = document.getElementById("forecast");
      forecast.innerHTML = "";
  
     
      const details = data.list.filter((item, index) => index % 8 === 0);
  
      details.forEach((day, idx) => {
        if (idx < 5) { // for 5 days 
          
          const tem = day.main.temp;
          const icon = day.weather[0].icon;
          const date = new Date(day.dt_txt).toLocaleDateString();
  
          forecast.innerHTML += `
                      <div class="day">
                          <div class="forecast-date"><h1>${date}</h1></div>
                          <div class="forecast-icon">
                              <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                          </div>
                          <div class="forecast-temp">${tem}°C</div>
                      </div>
                  `;
        }
      });
    } catch (error) {
        alert("please check the place name")
      console.log(error);
    }
  }