import React, { Component } from 'react';
import {
  ListView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { MenuProvider } from 'react-native-popup-menu';
import Style from './../Style';
import HomePage from './../Home';
import Automation from './../Automation';
import Dashboard from './../Dashboard';
import Notifications from './../Notifications';
import Settings from './../Settings';

const initialLayout = {
      height: 0,
      width: Dimensions.get('window').width,
};

export default class WelcomeScreen extends Component {
  state = {
        index: 0,
        routes: [
          { key: 'home', title: 'My Home' },
          { key: 'automation', title: 'Automation' },
          { key: 'dashboard', title: 'Dashboard' },
          { key: 'notification', title: 'Notification' },
          { key: 'settings', title: 'Settings' }

        ]
      };

  _handleIndexChange = index => this.setState({ index });

  _renderFooter = props => <TabBar
                              style={{ backgroundColor: '#fff' }}
                              labelStyle={{ color: '#000', fontSize: 6 }}
                              indicatorStyle={{ backgroundColor: '#5d579e'}}
                              {...props}
                           />;

  _renderScene = ({ route }) => {
  switch (route.key) {
  case 'home':
    return <HomePage />;
  case 'automation':
    return <Automation />;
  case 'dashboard':
    return <Dashboard />;
  case 'notification':
    return <Notifications />;
  case 'settings':
    return <Settings />;
  default:
    return null;
  }
}

  render() {
    return(
      <View style={{ flex: 1 }}>
        <TabViewAnimated
          navigationState={this.state}
          renderScene={this._renderScene}
          renderFooter={this._renderFooter}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      </View>
    );
  }
};
