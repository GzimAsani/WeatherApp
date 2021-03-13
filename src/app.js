import Weather from './weather'
import UI from './ui'


const weather = new Weather('Boston');


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
  }