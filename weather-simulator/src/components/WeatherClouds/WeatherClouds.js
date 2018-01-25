import React, { Component } from 'react';
import { View, Model, asset, Animated } from 'react-vr';

class WeatherClouds extends Component {
  state = {
    movingX: new Animated.Value(100)
  };

  constructor() {
    super();
    setInterval(() => this.animateCloudHandler(), 5000);
  }
  componentDidMount() {
    this.animateCloudHandler();
  }
  animateCloudHandler = () => {
    this.state.movingX._value < 0
      ? this.setState({
          movingX: new Animated.Value(100)
        })
      : Animated.timing(this.state.movingX, {
          toValue: -150,
          duration: 5000
        }).start();
  };
  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {
              translate: [0, -25, -150]
            },
            {
              rotateX: -90
            },
            {
              rotateZ: this.props.wind.deg
            },
            {
              translateX: this.state.movingX
            }
          ]
        }}
      >
        <Model
          scale={0.01}
          source={{
            obj: asset('clouds.obj')
          }}
        />
      </Animated.View>
    );
  }
}

export default WeatherClouds;
