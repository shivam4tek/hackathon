import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native';
import Style from '../Style';
import LinearGradient from 'react-native-linear-gradient';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const initialLayout = {
      height: 0,
      width: Dimensions.get('window').width,
};

export default class Login extends Component {
  state = {
        index: 0,
        routes: [
          { key: 'first', title: 'Login' },
          { key: 'second', title: 'Signup' },
        ]
      };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
                              style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20}}
                              labelStyle={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}
                              indicatorStyle={{ backgroundColor: '#5d579e'}}
                              {...props}
                           />;

  _renderScene = ({ route }) => {
  switch (route.key) {
  case 'first':
    return <LoginScreen />;
  case 'second':
    return <RegisterScreen />
  default:
    return null;
  }
}

  render() {
    return(
      <LinearGradient
      colors={Style.gradientColor}
      style={{flex: 1, alignItems: 'center'}}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 1, y: 0.8 }}
      >
          <View style={styles.boxStyle}>
              <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
              />
          </View>
      </LinearGradient>
    );
  }
};
const styles = {
  boxStyle: {
    height: 2*(Dimensions.get('window').height / 3),
    width:  (Dimensions.get('window').width / 1.2),
    backgroundColor: '#fff',
    marginTop: (Dimensions.get('window').height / 4),
    borderRadius: 10
  }
};
