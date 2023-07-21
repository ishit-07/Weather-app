const API_KEY = "<OPEN_WEATHER_API_KEY>";


// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

let searchDetail = document.querySelector(".search input");
let formSumbmit = document.querySelector("form");

let cityName = document.querySelector(".cities h1");
let chanceRain = document.querySelector(".cities small");
let temperature = document.querySelector(".cities h2");
let weatherImage = document.querySelector(".cities img");

// update air conditions details

let realFeel = document.querySelector(".real-feel h1");
let wind = document.querySelector(".wind h1");
let chanceOfRain = document.querySelector(".chance-of-rain h1");
let UVIndex = document.querySelector(".uv-index h1");
let humidity = document.querySelector(".humidity h1");

formSumbmit.addEventListener("submit", search);

let target;

const fetchData = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${targetLocation}&aqi=no`;

  const response = await fetch(url);

  const data = await response.json();

  // console.log(data);

  // Main data
  let locationNameData = data.location.name;
  let weatherImageData = data.current.condition.icon;
  let cloudData = data.current.cloud;

  // data of Air conditions
  let degree_C_Data = data.current.temp_c;
  let windSpeedData = data.current.wind_kph;
  let UVIndexData = data.current.uv;
  let realFeelData = data.current.feelslike_c;
  let humidityData = data.current.humidity;


  updataDetails(
    locationNameData,
    weatherImageData,
    cloudData,
    degree_C_Data,
    windSpeedData,
    UVIndexData,
    realFeelData,
    humidityData
  );

  // console.log(weatherImageData);
};

function updataDetails(
  locationNameData,
  weatherImageData,
  cloudData,
  degree_C_Data,
  windSpeedData,
  UVIndexData,
  realFeelData,
  humidityData
) {
  cityName.innerText = locationNameData;
  chanceRain.innerText = `Chance of rain: ${cloudData}%`;
  weatherImage.src = `${weatherImageData}`;
  temperature.innerText = `${degree_C_Data}°C`;

  realFeel.innerText = `${realFeelData}°C`;
  wind.innerText = `${windSpeedData} km/h`;
  chanceOfRain.innerText = `${cloudData}%`;
  UVIndex.innerText = UVIndexData;
  humidity.innerText = `${humidityData}%`;
}

function search(e) {
  e.preventDefault();

  target = searchDetail.value;
  fetchData(target);
}
/* 
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const time = new Date();
const date = time.getDay();
const month = time.getMonth();
console.log(days[date]);
console.log(months[month]);
 */
