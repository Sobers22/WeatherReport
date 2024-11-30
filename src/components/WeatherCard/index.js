import './index.css'

const WeatherCard = props => {
  const {details} = props
  const {
    name,
    temperatureInCelsius,
    temperatureInFarenheit,
    humidity,
    windSpeed,
    condition,
  } = details

  return (
    <div className="card-container">
      <h1 className="heading">Current Weather in {name}</h1>
      <p>Temperature: {temperatureInCelsius}</p>
      <p>Humidity: {humidity}</p>
    </div>
  )
}

export default WeatherCard
