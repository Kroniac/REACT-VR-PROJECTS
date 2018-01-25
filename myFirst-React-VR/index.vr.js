import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Animated, Box } from 'react-vr';
import Blink from './src/container/Blink/Blink';

export default class myFirst_React_VR_p extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0) // init opacity 0
    };
  }
  componentDidMount() {
    Animated.timing(
      // Uses easing functions
      this.state.fadeAnim, // The value to drive
      { toValue: 1 } // Configuration
    ).start(); // Don't forget start!
  }

  render() {
    let text = ['My', 'First', 'React', 'VR', 'Project'];
    return (
      <View style={{ flex: 1 }}>
        <Pano source={asset('winter.jpg')} />
        <View style={{ transform: [{ translate: [0, 0, -3] }] }}>
          <Blink textArray={text} />
        </View>
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: 'red',
            transform: [{ translate: [0, 2, -3] }]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('myFirst_React_VR_p', () => myFirst_React_VR_p);
