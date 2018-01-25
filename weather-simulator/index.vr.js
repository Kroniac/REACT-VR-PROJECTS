import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import * as keys from './src/config/Keys/keys';

export default class weather_simulator extends Component {
  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&APPID=${
        keys.CURRENT_WEATHER_KEY
      }`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }
  render() {
    return (
      <View>
        <Pano source={asset('streets.jpg')} />
      </View>
    );
  }
}

AppRegistry.registerComponent('weather_simulator', () => weather_simulator);
