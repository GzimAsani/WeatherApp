import getWeather, { weather } from './app';


getWeather();
document.addEventListener('DOMcontentLoaded', getWeather);


document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  getWeather();
  $('#locModal').modal('hide');
});
