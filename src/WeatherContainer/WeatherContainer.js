import React, {Component} from 'react'
import WeatherCard from './WeatherCard'
import {Container, Grid} from 'semantic-ui-react'
import './WeatherContainer.css'
import sunny from './../images/sunny.png'

class WeatherContainer extends Component{
  state={
    cityId: "4580543",
    apiKey: "8ebfc62129739c303288c83377de3a41",
    lon:" -82.394012",
    lat: "34.852619"

  }

  getWeatherData= async()=>{
   // const url= `https://api.openweathermap.org/data/2.5/onecall?&appid=${this.state.apiKey}&long=${this.state.lon}&lat=${this.state.lat}&cnt=7&exclude=hourly,minutely`
    const url2=`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&appid=8ebfc62129739c303288c83377de3a41`
    const response= await fetch(url2)
    const weatherData= await response.json()

    console.log(weatherData)
  }
  render=()=>{
    this.getWeatherData()
    return(
      <div>
        <Container>
          <Grid container columns={7}>
            <Grid.Column>
              <WeatherCard forecastImage={sunny}/>
            </Grid.Column>
            <Grid.Column>
              <WeatherCard forecastImage={sunny}/>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}
export default WeatherContainer;