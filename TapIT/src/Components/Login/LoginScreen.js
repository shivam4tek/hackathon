import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = { 
      userName: null,
      password: null,
      mpin: null
    }
  }

  getMoviesFromApiAsync = () => {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return(
        <View style={styles.firstRouteStyle}>
            <Text style={{fontSize: 16, alignSelf: 'center', color: '#4f4d4e'}}>Welcome back!</Text>
            <Text style={{fontSize: 12, alignSelf: 'center', color: '#4f4d4e'}}>Enter MPIN to login</Text>
            <View style={styles.inputContainer}>
              <Image
              source={require('../Resources/lockicon.png')}
              style={{width: (Dimensions.get('window').width / 12), height: 40, marginRight: 10}}
              resizeMode='contain'/>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => {
                  if (text.length <= 4) {
                    this.setState({mpin: text})
                  }
                  if (text.length === 4) {
                    Actions.completeProfile();
                  }
                }}
                value={this.state.mpin}
                placeholderTextColor='#bcbbbb'
                placeholder='MPIN'
                secureTextEntry={true}
              />
            </View>
            <View style={{ alignSelf: 'center'}}>
              <Text style={{ fontSize: 10, color: '#bcbbbb' }}>or login with</Text>
            </View>
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
            <View style={{ alignSelf: 'center'}}>
              <TouchableOpacity
              activeOpacity={1}
              onPress={() => {Actions.completeProfile()}}
              activeOpacity={1}>
                <Image
                source={require('../Resources/login.png')}
                style={{width: (Dimensions.get('window').width / 2), height: 40, marginRight: 10}}
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
    marginTop: 40,
    backgroundColor: '#fff'
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
