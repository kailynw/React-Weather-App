import React, {Component} from 'react'
import WeatherContainer from './WeatherContainer/WeatherContainer'

import './App.css';

class App extends Component{
  render=()=>{
    return (
      <div className="App">
          <WeatherContainer/>
      </div>
    );
  }
}

export default App;
