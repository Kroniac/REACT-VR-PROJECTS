import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';

export default class world_tour_vr extends Component {
  state = {
    showMenu: false
  };

  toggleMenuHandler = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  render() {
    return (
      <View>
        <Pano source={asset('bac.jpg')} />
        <View style={styles.menuButton}>
          <Text
            onEnter={this.toggleMenuHandler}
            onExit={this.toggleMenuHandler}
            style={[styles.buttonText, { fontSize: 0.1 }]}
          >
            {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuButton: {
    width: 0.5,
    height: 0.5,
    borderRadius: 0.25,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    padding: 0.1,
    transform: [{ translate: [-3, -0.25, -3] }]
  },
  buttonText: {
    color: 'red',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('world_tour_vr', () => world_tour_vr);
