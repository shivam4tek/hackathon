import React, { Component } from 'react';
import {
  ListView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Switch } from 'react-native-switch';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Style from './../Style';

export default class Home extends Component {
  state = {
    list: false
  };
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(['Hall', 'Kitchen', 'Bedroom', 'Washroom', 'Kids Bedroom']);
  }
  shouldComponentUpdate(){
    return true;
  }

  renderRow(rowData) {
    // ToDo => Change the margin of the grids later for different screens and define widths properly
    return (
        <TouchableOpacity
        activeOpacity={1}
        >
          <View style={[Style.gridStyle]}>
              <View style={Style.positionCenter}>
                <Image
                  style={{ height: 50, width: 50, alignSelf: 'center' }}
                  resizeMode='contain'
                />
                <Text>{rowData}</Text>
              </View>
          </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1  }}>
        <View style={Style.mainHeadingContainer}>
          <Text style={Style.headingText}>My Home</Text>
          <Menu onSelect={value => alert(`Selected number: ${value}`)}>
            <MenuTrigger>
              <Image
              source={require('../Resources/optionsIcon.png')}
              resizeMode='contain'/>
            </MenuTrigger>
            <MenuOptions>
              <MenuOption
              style={{ padding: 20 }}
              onSelect={() => this.setState({ list: false})}>
                <Text>Room heirarchy</Text>
              </MenuOption>
              <MenuOption
              style={{ padding: 20 }}
              onSelect={() => this.setState({ list: true})}>
                <Text>All devices</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
        <ScrollView>
          {/*<View style={{ alignItems: 'center',  marginTop: 60 }}>
            <TouchableOpacity
            activeOpacity={1}
            >
              <LinearGradient
              style={[styles.allDevicesGrid]}
              colors={Style.gradientColor}
              start={{ x: 0, y: 0.1 }}
              end={{ x: 1, y: 0.8 }}>
                  <View style={Style.positionCenter}>
                    <Image
                      style={{ height: 50, width: 50, alignSelf: 'center' }}
                      resizeMode='contain'
                    />
                    <Text style={{ backgroundColor: 'transparent', color: '#fff', fontSize: 18, fontWeight: 'bold'}}>All Devices</Text>
                  </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>*/}
          <ListView
            scrollEnabled={false}
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, width: (Dimensions.get('window').width / 1.1), alignSelf: 'center' }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  allDevicesGrid: {
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#cacaca',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    elevation: 1,
    width: (Dimensions.get('window').width / 1.1),
    height: (Dimensions.get('window').width / 2.5),
    alignItems: 'center',
    justifyContent: 'center'
  }
};
