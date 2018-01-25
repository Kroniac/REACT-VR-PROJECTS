import React from 'react';
import { Text } from 'react-vr';
const main = props => (
  <Text
    style={{
      backgroundColor: '#777879',
      fontSize: 0.8,
      fontWeight: '400',
      layoutOrigin: [0.5, 0.5],
      paddingLeft: 0.2,
      paddingRight: 0.2,
      textAlign: 'center',
      textAlignVertical: 'center',
      transform: [{ translate: [0, 0, -3] }],
      color: 'red'
    }}
    onPress={() => console.log('1st')}
  >
    {props.name}
  </Text>
);

export default main;
