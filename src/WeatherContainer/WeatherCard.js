import React , {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'

class WeatherCard extends Component{
  render=()=>{
    return(
      <Card className='Card'>
        <Image src={this.props.forecastImage} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>Sunday</Card.Header>
          <Card.Meta><span>10/12/21</span></Card.Meta>
          <Card.Description> Forecast </Card.Description>
        </Card.Content>
        <Card.Content extra> <span>78°F | 34°C</span></Card.Content>
      </Card>
    )
  }
}

export default WeatherCard;