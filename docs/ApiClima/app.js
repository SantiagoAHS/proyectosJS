const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "024b9efc632e63304fd204fd77c0782f";

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchapi = (url) => fetch(url).then((response) => response.json());

async function getclima(lat, lon) {
  const url = `${UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
  console.log(url);
  const clima = await fetchapi(url);
  console.log(clima);
  document.querySelector('#left h2').innerHTML = clima.name;

  // Convertir la temperatura de Kelvin a Celsius
  const temperaturaKelvin = clima.main.temp;
  const temperaturaCelsius = temperaturaKelvin - 273.15;
  document.querySelector('#left h3').innerHTML = temperaturaCelsius.toFixed(2) + "°C";

  // Cambio de color de fondo basado en la temperatura
  const colorDeFondo = cambiarColorFondoSegunTemperatura(temperaturaCelsius);
  
  // Cambio de emoji basado en el color de fondo
  cambiarEmojiSegunColor(colorDeFondo);
}

async function getclimaBycity(city){
    const url=`${UrlBase}q=${ city }&appid=${ ApiKey}`;
    const clima = await fetchapi(url);
    console.log(clima);
    document.querySelector('h2').innerHTML = clima.name;
    // Convertir la temperatura de Kelvin a Celsius
  const temperaturaKelvin = clima.main.temp;
  const temperaturaCelsius = temperaturaKelvin - 273.15;
  document.querySelector('#left h3').innerHTML = temperaturaCelsius.toFixed(2) + "°C";

  // Cambio de color de fondo basado en la temperatura
  const colorDeFondo = cambiarColorFondoSegunTemperatura(temperaturaCelsius);
  
  // Cambio de emoji basado en el color de fondo
  cambiarEmojiSegunColor(colorDeFondo);
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getclima(lat, lon);
  }
);

function cambiarColorFondoSegunTemperatura(temperaturaCelsius) {
  const body = document.body;

  if (temperaturaCelsius < 10) {
    body.style.backgroundColor = "blue"; // Fondo azul para temperaturas frías
  } else if (temperaturaCelsius >= 10 && temperaturaCelsius <= 23) {
    body.style.backgroundColor = "yellow"; // Fondo amarillo para temperaturas ideales
  } else if (temperaturaCelsius > 23) {
    body.style.backgroundColor = "red"; // Fondo rojo para el calor
  }

  return body.style.backgroundColor; // Devolvemos el color actual de fondo
}

function cambiarEmojiSegunColor(colorDeFondo) {
  const emojiElement = document.querySelector('.emoji');

  // Cambia el emoji basado en el color de fondo
  switch (colorDeFondo) {
    case "blue":
      emojiElement.innerHTML = "❄️"; // Emoji de frío
      break;
    case "yellow":
      emojiElement.innerHTML = "😊"; // Emoji de temperatura ideal
      break;
    case "red":
      emojiElement.innerHTML = "☀️"; // Emoji de calor
      break;
    default:
      emojiElement.innerHTML = "🤨"; // Valor por defecto
  }
}

btnBuscar.addEventListener('click',()=>{
    const city= inputCity.value;
    if(city){
        getclimaBycity(city);
    }
})
