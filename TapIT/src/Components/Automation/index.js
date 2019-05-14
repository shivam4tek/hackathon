import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native';
import Style from '../Style';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Scenes from './Scenes';

const initialLayout = {
      height: 0,
      width: Dimensions.get('window').width,
};

export default class Automation extends Component {
  state = {
        index: 0,
        routes: [
          { key: 'scenes', title: 'Scenes' },
          { key: 'workflows', title: 'workflows' },
        ]
      };
  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
                              style={{ backgroundColor: '#fff' }}
                              labelStyle={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}
                              indicatorStyle={{ backgroundColor: '#5d579e'}}
                              {...props}
                           />;

  _renderScene = ({ route }) => {
    switch (route.key) {
    case 'scenes':
      return <Scenes />;
    case 'second':
      return <RegisterScreen />
    default:
      return null;
    }
  }

  render() {
    return(
      <View style={Style.container}>
        <View style={[Style.mainHeadingContainer, {marginBottom: 30}]}>
          <Text style={Style.headingText}>Automation</Text>
        </View>
        <TabViewAnimated
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      </View>
    );
  }
}
