import React from 'react';
import { View, Text, StyleSheet } from 'react-vr';

const menuItems = props => (
  <View
    key={props.key}
    onEnter={props.onChange}
    style={[styles.menuItem, props.style]}
  >
    <Text style={styles.menuItemText}>{props.place}</Text>
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 1.2,
    width: 1.2,
    borderRadius: 0.5,
    borderWidth: 0.02,
    backgroundColor: '#fff'
  },
  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: 'blue'
  }
});

export default menuItems;
