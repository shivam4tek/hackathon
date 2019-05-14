import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CompleteProfile extends Component {
  state = {
    name: null,
    password: null,
    email: null
  }
  render() {
    return(
        <View style={styles.firstRouteStyle}>
            <Text style={{fontSize: 20, alignSelf: 'flex-start', fontWeight: 'bold' }}>Complete your profile</Text>
            <View style={{ alignSelf: 'center' }}>
              <TouchableOpacity
              activeOpacity={1}>
                <Image
                source={require('../Resources/profilePhoto.png')}
                style={{width: (Dimensions.get('window').width / 1.5), height: (Dimensions.get('window').height / 6) }}
                resizeMode='contain'/>
              </TouchableOpacity>
            </View>
            <View style={{ height: (Dimensions.get('window').height / 4), marginBottom: 10 }}>
              <View style={styles.inputContainer}>
                <Image
                source={require('../Resources/emailicon.png')}
                style={{width: (Dimensions.get('window').width / 12), height: 40 }}
                resizeMode='contain'/>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(text) => this.setState({name: text})}
                  value={this.state.userName}
                  placeholderTextColor='#bcbbbb'
                  placeholder='Full Name'
                />
              </View>
              <View style={styles.inputContainer}>
                <Image
                source={require('../Resources/lockicon.png')}
                style={{width: (Dimensions.get('window').width / 12), height: 40 }}
                resizeMode='contain'/>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(text) => this.setState({password: text})}
                  value={this.state.password}
                  placeholderTextColor='#bcbbbb'
                  placeholder='Phone Number'
                />
              </View>
              <View style={styles.inputContainer}>
                <Image
                source={require('../Resources/lockicon.png')}
                style={{width: (Dimensions.get('window').width / 12), height: 40 }}
                resizeMode='contain'/>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(text) => this.setState({email: text})}
                  value={this.state.password}
                  placeholderTextColor='#bcbbbb'
                  placeholder='E-mail'
                />
              </View>
            </View>
            <View style={{ alignSelf: 'center'}}>
              <TouchableOpacity
              activeOpacity={1}>
                <Image
                source={require('../Resources/continue.png')}
                style={{width: (Dimensions.get('window').width / 2), height: (Dimensions.get('window').height / 8) }}
                resizeMode='contain'/>
              </TouchableOpacity>
            </View>
            <View style={styles.skipStyle}>
              <Text style={{ fontSize: 12, color: '#bcbbbb', fontWeight: 'bold' }}>Get started with the app, you{"\n"}can always do this later</Text>
              <TouchableOpacity
              activeOpacity={1}
              onPress={() => {Actions.welcomescreen()}}>
                <Image
                source={require('../Resources/skip.png')}
                style={{width: (Dimensions.get('window').width / 3), height: (Dimensions.get('window').height / 10) }}
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
    backgroundColor: '#fff',
    padding: 50
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
    height: (Dimensions.get('window').height / 14),
    margin: 5

  },
  skipStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};
