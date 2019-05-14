import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput,Image, TouchableOpacity } from 'react-native';


export default class RegisterScreen extends Component {
  state = {
    userName: null,
    password: null
  }
  render() {
    return(
        <View style={styles.firstRouteStyle}>
            <Text style={{fontSize: 16, alignSelf: 'center', color: '#4f4d4e'}}>Get Started!</Text>
            <View style={styles.inputContainer}>
              <Image
              source={require('../Resources/emailicon.png')}
              style={{width: (Dimensions.get('window').width / 12), height: 40, marginRight: 10}}
              resizeMode='contain'/>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => this.setState({userName: text})}
                value={this.state.userName}
                placeholderTextColor='#bcbbbb'
                placeholder='E-mail'
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
              source={require('../Resources/lockicon.png')}
              style={{width: (Dimensions.get('window').width / 12), height: 40, marginRight: 10}}
              resizeMode='contain'/>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                placeholderTextColor='#bcbbbb'
                placeholder='Password'
              />
            </View>
            <View>
              <TouchableOpacity
              activeOpacity={1}>
                <Text style={{ fontSize: 12, color: '#bcbbbb', marginLeft: 20 }}>Already have an account??</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center'}}>
              <TouchableOpacity
              activeOpacity={1}
              onPress={() => {Actions.completeProfile()}}>
                <Image
                source={require('../Resources/login.png')}
                style={{width: (Dimensions.get('window').width / 2), height: 40, marginRight: 10}}
                resizeMode='contain'/>
              </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center'}}>
              <Text style={{ fontSize: 10, color: '#bcbbbb' }}>or signup with</Text>
            </View>
            <View style={styles.socialLogin}>
              <TouchableOpacity
              activeOpacity={1}>
                <Image
                source={require('../Resources/facebook.png')}
                style={{width: (Dimensions.get('window').width / 2), height: 30, marginRight: 10}}
                resizeMode='contain'/>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={1}>
                <Image
                source={require('../Resources/google.png')}
                style={{width: (Dimensions.get('window').width / 2), height: 30, marginRight: 10}}
                resizeMode='contain'/>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = {
  firstRouteStyle: {
    justifyContent: 'space-around',
    flex: 1,
    marginTop: 40
  },
  inputStyle: {
    height: 50,
    width:  (Dimensions.get('window').width / 2)
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#bcbbbb',
    marginLeft: 20,
    marginRight: 20
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  }
};
