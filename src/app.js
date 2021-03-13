import Weather from './weather'
import UI from './ui'
import Storage from './storage'


const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);


const ui = new UI()
const getWeather = () => {

  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))

}
  export default getWeather;

  export {
    weather,
    ui,
  }