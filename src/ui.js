import Converttemp from './converttemp';

class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.string2 = document.getElementById('w-string2');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');

    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.background = document.querySelector('background');
    this.celcius = document.getElementById('with-celcius');
    this.fahrenheit = document.getElementById('with-fahrenheit');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp}℃`;
    this.string2.textContent = `${Converttemp(weather.main.temp)} + '°F'`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;

    if (weather.main.temp > 7) {
      background.classList.add('blue');
      background.classList.remove('red');
    } else if (weather.main.temp < 6) {
      background.classList.add('red');
      background.classList.remove('blue');
    }

    this.fahrenheit.addEventListener('click', () => {
      this.string2.classList.remove('no-display');
      this.string.classList.add('no-display');
    });

    this.celcius.addEventListener('click', () => {
      this.string2.classList.add('no-display');
      this.string.classList.remove('no-display');
    });
  }
}
export default UI;


// function toggleStatus(status) {
//   if (status.target.classList.contains('status')) {
//     if (status.target.textContent === 'Done!') {
//       status.target.textContent = 'Not yet!';
//     } else {
//       status.target.textContent = 'Done!';
//     }
//   }
// }