import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';

export default class world_tour_vr extends Component {
  state = {
    showMenu: false,
    places: ['A', 'B', 'C', 'D']
  };

  toggleMenuHandler = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  render() {
    let menuItems = this.state.showMenu
      ? this.state.places.map((place, index) => (
          <View
            key={index}
            style={[
              styles.menuItem,
              {
                transform: [
                  {
                    translate: [
                      0,
                      index % ((this.state.places.length) / 2),
                      0
                    ]
                  }
                ]
              }
            ]}
          >
            <Text style={styles.menuItemText}>{place}</Text>
          </View>
        ))
      : null;
    return (
      <View>
        <Pano source={asset('bac.jpg')} />
        <View style={styles.menuButton}>
          <Text
            onEnter={this.toggleMenuHandler}
            
            style={[styles.buttonText, { fontSize: 0.1 }]}
          >
            {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
          </Text>
        </View>
        <View style={styles.menu}>{menuItems}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 5,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [
      {
        translate: [-3, 0, -7.5]
      }
    ]
  },
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
  },
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

AppRegistry.registerComponent('world_tour_vr', () => world_tour_vr);
