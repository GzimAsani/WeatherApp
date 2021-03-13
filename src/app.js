import Weather from './weather'
const weather = new Weather('Boston');

const getWeather = () => {

  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err))

}
  export default getWeather;