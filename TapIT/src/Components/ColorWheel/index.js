import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Style from './../Style';
import { ColorPicker } from 'react-native-color-picker'


export default class ColorWheelModal extends Component {
  state = {
    color: null
  }
  render() {
    return(
      <View style={Style.container}>
        <ColorPicker
          onColorSelected={color => alert(`Color selected: ${color}`)}
          onOldColorSelected={color => alert(`Old color selected: ${color}`)}
          // onColorChange={color => alert(`Color roaming: ${color}`)}
          style={{flex: 1}}
        />
      </View>
    );
  }
}
