import getWeather from './app'
import { weather } from './app'

getWeather();
document.addEventListener('DOMcontentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation('Belgrade');

  getWeather();
  $('#locModal').modal('hide')
})
