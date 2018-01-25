import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-vr';

export default class WeatherCard extends Component {
  render() {
    return (
      <View style={styles.weatherCard}>
        <Text style={styles.weatherText}>{this.props.weatherDetails.name}</Text>
        <Text style={styles.weatherText}>
          Current Weather: {this.props.weatherDetails.weather[0].description}
        </Text>
        <Text style={styles.weatherText}>
          Temperature: {this.props.weatherDetails.main.temp}°
        </Text>
        <Text style={styles.weatherText}>
          Wind Speed: {this.props.weatherDetails.wind.speed}mph
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    borderRadius: 0.1,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 0.05,
    padding: 0.5,
    layoutOrigin: [-0.5, 0],
    transform: [
      {
        translate: [0, 0, -7]
      }
    ]
  },
  weatherText: {
    textAlign: 'center',
    fontSize: 0.3,
    color: '#000'
  }
});
