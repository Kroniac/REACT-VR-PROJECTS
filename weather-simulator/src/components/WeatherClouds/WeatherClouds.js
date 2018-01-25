import React from 'react';
import { View, Model, asset } from 'react-vr';

const weatherClouds = props => {
  return (
    <View
      style={{
        transform: [
          {
            translate: [0, -25, -150]
          },
          {
            rotateX: -90
          },
          {
            rotateZ: props.wind.deg
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
    </View>
  );
};

export default weatherClouds;
