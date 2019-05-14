import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Style from './../Style';

export default class Settings extends Component {
  render() {
    return(
      <View style={Style.container}>
        <View style={Style.mainHeadingContainer}>
          <Text style={Style.headingText}>Settings</Text>
        </View>
      </View>
    );
  }
}
