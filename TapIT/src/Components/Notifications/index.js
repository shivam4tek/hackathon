import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native';
import Style from './../Style';

export default class Notifications extends Component {
  render() {
    return(
      <View style={[Style.container,Style.positionCenter]}>
        <Text style={{ fontSize: 24, color: '#bcbbbb' }}>No Notifications! </Text>
      </View>
    );
  }
}
