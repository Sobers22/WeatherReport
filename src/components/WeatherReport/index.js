import {Component} from 'react'
import WeatherCard from '../WeatherCard'
import './index.css'

class WeatherReport extends Component {
  state = {
    searchInput: '',
    weatherData: [],
    favoriteCitiesList: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = async () => {
    const {searchInput} = this.state
    const API_KEY = 'b4d5c6cf85b14411b6163318243011'
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchInput}&units=metric`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const fetchedData = {
      name: data.location.name,
      temperatureInCelsius: data.current.temp_c,
      temperatureInFarenheit: data.current.temp_f,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      condition: data.current.condition.text,
    }
    console.log(data)
    console.log(fetchedData)
    this.setState({weatherData: fetchedData})
  }

  render() {
    const {favoriteCitiesList, weatherData} = this.state
    console.log(weatherData)
    return (
      <div className="bg-container">
        <div className="weather-container">
          <h1 className="heading">Weather Dashboard</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-box"
              placeholder="Enter city name"
              onChange={this.onChangeSearchInput}
            />
            <button
              className="search-button"
              type="button"
              onClick={this.onClickSearchButton}
            >
              Search
            </button>
          </div>
          <div className="switch-button-container">
            <button type="button" className="switch-button">
              Switch to Fahrenheit
            </button>
          </div>
          <div>
            <h1 className="heading2">Favorite Citites:</h1>
            {favoriteCitiesList === 0 ? (
              <button type="button">jbviebv</button>
            ) : (
              <p className="p1">No favorite cities yet.</p>
            )}
          </div>
          {weatherData.length !== 0 && <WeatherCard details={weatherData} />}
        </div>
      </div>
    )
  }
}

export default WeatherReport
