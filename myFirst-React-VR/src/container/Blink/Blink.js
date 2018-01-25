import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';

class Blink extends Component {
  state = {
    showText: true,
    count: 0,
    fontSize: 0.3,
    color: 'red'
  };

  constructor(props) {
    super(props);
    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
      this.state.showText
        ? this.setState(prevState => {
            return {
              count: (prevState.count + 1) % props.textArray.length
            };
          })
        : null;
    }, 1000);
  }

  render() {
    let display = this.state.showText
      ? this.props.textArray[this.state.count]
      : null;
    let text = display ? (
      <Text
        onEnter={() =>
          this.setState({
            fontSize: 0.5,
            color: 'blue'
          })
        }
        onExit={() =>
          this.setState({
            fontSize: 0.1,
            color: 'red'
          })
        }
        style={[
          styles.text,
          { fontSize: this.state.fontSize, color: this.state.color }
        ]}
      >
        {display}
      </Text>
    ) : null;
    return <View>{text}</View>;
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#777879',
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{ translate: [0, 0, -3] }]
  }
});
export default Blink;
