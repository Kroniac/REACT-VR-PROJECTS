import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class world_tour_vr extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('bac.jpg')} />
      
      </View>
    );
  }
}

AppRegistry.registerComponent('world_tour_vr', () => world_tour_vr);
