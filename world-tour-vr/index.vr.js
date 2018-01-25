import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';
import MenuItems from './src/components/MenuItems/MenuItems';

export default class world_tour_vr extends Component {
  state = {
    showMenu: false,
    places: ['A', 'B', 'C', 'D', 'HOME'],
    place: 'HOME.jpg'
  };

  toggleMenuHandler = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  changePlaceHandler = place => {
    this.setState({
      place: place + '.jpg'
    });
  };
  render() {
    let menuItems = this.state.showMenu
      ? this.state.places.map((place, index) => {
          return (
            <MenuItems
              key={index}
              onChange={() => this.changePlaceHandler(place)}
              style={{
                transform: [
                  {
                    translate: [0, index % (this.state.places.length / 2), 0]
                  }
                ]
              }}
              place={place}
              MenuItems
            />
          );
        })
      : null;
    return (
      <View>
        <Pano source={asset(this.state.place)} />
        <View onEnter={this.toggleMenuHandler} style={styles.menuButton}>
          <Text style={[styles.buttonText, { fontSize: 0.1 }]}>
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
  }
});

AppRegistry.registerComponent('world_tour_vr', () => world_tour_vr);
