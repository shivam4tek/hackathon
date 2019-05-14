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
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Style from './../Style';

export default class Home extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(['Tubelight', 'Dimmer', 'Bedlamp', 'Hall thermostat', 'Kitchen Curtains']);
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
          <Text style={Style.headingText}>Favourites</Text>
        </View>
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            enableEmptySections
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, width: (Dimensions.get('window').width / 1.1), alignSelf: 'center' }}
          />
      </View>
    );
  }
}

const styles = {
  gridStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#cacaca',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    elevation: 1,
    width: (Dimensions.get('window').width / 2.5),
    height: (Dimensions.get('window').width / 3),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
};
