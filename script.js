// const searchbtn = document.getElementById('btn');
// const cityInput = document.getElementById('city-input');
// const weatherCards = document.querySelector(".others");
// const img = document.querySelector(".image-container");

// const apiKey = '64afc18e4eec9c8916519c03409b7bf9';

// document.getElementById("btn").addEventListener("click", function() {
//   var city = document.getElementById('city-input').value;
  
  


//   var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; //current weather

//   fetch(url)
//       .then(response => response.json())
//       .then(data => {
//           if (data.cod === 200) {

//             console.log(data); // Log the entire response to check its structure
//                 console.log(data.main.humidity); // Check if humidity data is present
//                 console.log(data.wind.speed); // Check if wind speed data is present

//                 var lat = data.coord.lat;
//                 var lon = data.coord.lon; 

//                 console.log(lat); // Check if humidity data is present
//                 console.log(lon);

//               // Update the DOM with the fetched data
//               document.getElementById('location').textContent = data.name;
//               document.getElementById('tempe').textContent = `${data.main.temp} °C`;
//               document.getElementById('humidityy').textContent = `${data.main.humidity}%`;
//               document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;

//               getDetails(city, lat, lon);


//           } else {
//               alert('City not found');
//           }
//       })
//       .catch(error => console.log('Error fetching the weather data:', error));


//     })

//     const getDetails = (cityName, lat, lon) => {
//         const weather_api_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
//         fetch(weather_api_url).then(res => res.json()).then(data => {

//             console.log(data.list);
            
//             //filtering the forecast to get only one forecast per day
//             const uniqueForecastDays = [];
//             const fiveDaysForecast = data.list.filter(forecast => {
//                 const forecastDate = new Date(forecast.dt_txt).getDate();
//                 if(!uniqueForecastDays.includes(forecastDate)) {
//                     return uniqueForecastDays.push(forecastDate);
//                 }
//             });
    
//             //clearing previous weather cards
//             cityInput.value = "";
//             img.innerHTML = "";
//             weatherCards.innerHTML = "";
            
    
//             //creating weather cards and adding them to the DOM
    
//             fiveDaysForecast.forEach((weatherItem, index) => {
//                 if(index === 0) {
//                     img.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
//                 } else {
//                     weatherCards.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
//                 }
                
//             });
    
    
//         }).catch(() => {
//             alert("An error occured while fetching the weather forecast!");
//         }) 
//     }


//     const createWeatherCard = (cityName, weatherItem, index) => {
//         if(index === 0) { // for main weather card
//             return `<img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather icon" width="100" height="auto">`;
//         } else { //for other 5 weather cards
//             return `<li class="cards">
//                     <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
//                     <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="weather icon" width="70" height="auto">
//                     <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
//                     <h4>Wind: ${weatherItem.wind.speed} km/h</h4>
//                     <h4>Humidity: ${weatherItem.main.humidity}%</h4>
//                 </li>`;
//         }
    
        
//     }





const searchbtn = document.getElementById('btn');
const cityInput = document.getElementById('city-input');
const weatherCards = document.querySelector(".others");
const img = document.querySelector(".image-container");

const apiKey = '64afc18e4eec9c8916519c03409b7bf9';


  
  


   //current weather
  function letsgo(city,url){
  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.cod === 200) {

            console.log(data); // Log the entire response to check its structure
                console.log(data.main.humidity); // Check if humidity data is present
                console.log(data.wind.speed); // Check if wind speed data is present

                var lat = data.coord.lat;
                var lon = data.coord.lon; 

                console.log(lat); // Check if humidity data is present
                console.log(lon);

              // Update the DOM with the fetched data
              document.getElementById('location').textContent = data.name;
              document.getElementById('tempe').textContent = `${data.main.temp} °C`;
              document.getElementById('humidityy').textContent = `${data.main.humidity}%`;
              document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;

              getDetails(city, lat, lon);


          } else {
              alert('City not found');
          }
      })
      .catch(error => console.log('Error fetching the weather data:', error));
    

    

    const getDetails = (cityName, lat, lon) => {
        const weather_api_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
        fetch(weather_api_url).then(res => res.json()).then(data => {

            console.log(data.list);
            
            //filtering the forecast to get only one forecast per day
            const uniqueForecastDays = [];
            const fiveDaysForecast = data.list.filter(forecast => {
                const forecastDate = new Date(forecast.dt_txt).getDate();
                if(!uniqueForecastDays.includes(forecastDate)) {
                    return uniqueForecastDays.push(forecastDate);
                }
            });
    
            //clearing previous weather cards
            cityInput.value = "";
            img.innerHTML = "";
            weatherCards.innerHTML = "";
            
    
            //creating weather cards and adding them to the DOM
    
            fiveDaysForecast.forEach((weatherItem, index) => {
                if(index === 0) {
                    img.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
                } else {
                    weatherCards.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
                }
                
            });
    
    
        }).catch(() => {
            alert("An error occured while fetching the weather forecast!");
        }) 
    }


    const createWeatherCard = (cityName, weatherItem, index) => {
        if(index === 0) { // for main weather card
            return `<img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather icon" width="100" height="auto">`;
        } else { //for other 5 weather cards
            return `<li class="cards">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="weather icon" width="70" height="auto">
                    <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
                    <h4>Wind: ${weatherItem.wind.speed} km/h</h4>
                    <h4>Humidity: ${weatherItem.main.humidity}%</h4>
                </li>`;
        }
    }
  }
  var city = "delhi";
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  letsgo(city,url)
    document.getElementById("btn").addEventListener("click", function() {
        var city = document.getElementById('city-input').value;
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        letsgo(city,url);
    })   