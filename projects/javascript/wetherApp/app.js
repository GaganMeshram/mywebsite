const apiKey = "&appid=552ceb32fc21b8d32456fba6c178b77b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const city = document.getElementById("city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const temp = document.querySelector(".temp");
let inp = document.getElementById("inp");
let searchBtn = document.querySelector(".search button");
const error = document.querySelector('.error')
const weather = document.querySelector(".weather");


async function getWeather(cityName) {
  const res = await fetch(apiUrl + cityName + `${apiKey}` + "&units=metric");

  let data = await res.json();
    if (data.cod !== 200) {
        error.style.display = 'block'
        weather.style.display = 'none'
        
    
  } else {
    city.textContent = data.name;
    humidity.textContent = data.main.humidity + " %";
    wind.textContent = data.wind.speed + " KM/H";
        temp.textContent = Math.round(data.main.temp) + "° C";
        weather.style.display = 'block'

    console.log(data);
  }
}

// getWeather(mumbai)

searchBtn.addEventListener("click", () => getWeather(inp.value));

// console.log(inp.value)
