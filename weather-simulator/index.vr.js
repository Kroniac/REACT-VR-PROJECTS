import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import * as keys from './src/config/Keys/keys';
import Weather from './src/components/WeatherCard/WeatherCard';
export default class weather_simulator extends Component {
  state = {
    weatherDetails: null
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&APPID=${
        keys.CURRENT_WEATHER_KEY
      }`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          weatherDetails: res
        });
      });
  }
  render() {
    let weather = this.state.weatherDetails ? (
      <Weather weatherDetails={this.state.weatherDetails} />
    ) : null;
    return (
      <View>
        <Pano source={asset('streets.jpg')} />
        {weather}
      </View>
    );
  }
}

AppRegistry.registerComponent('weather_simulator', () => weather_simulator);