import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-vr';

export default class WeatherCard extends Component {
  render() {
    return (
      <View style={styles.weatherCard}>
        <Text style={styles.weatherText}>
          {this.props.weatherDetails
            ? this.props.weatherDetails.name
            : 'Name Not Found'}
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
    opacity: 0.8,
    borderRadius: 0.1,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 0.05,
    padding: 0.5,
    layoutOrigin: [-0.5, 0],
    transform: [
      {
        translate: [-3, 0, -7]
      }
    ]
  },
  weatherText: {
    textAlign: 'center',
    fontSize: 0.3,
    color: '#000'
  }
});
