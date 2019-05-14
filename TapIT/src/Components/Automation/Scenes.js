import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, ListView, TouchableOpacity, Image } from 'react-native';
import Style from './../Style';

export default class Scenes extends Component {
  componentWillMount() {
      const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(['Good Morning', 'Movie', 'Midnight', 'Study Time', 'Study']);
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
  render(){
    return(
      <ListView
        scrollEnabled={false}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        enableEmptySections
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', width: (Dimensions.get('window').width / 1.1), marginTop: 50, alignSelf: 'center' }}
      />
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
    height: (Dimensions.get('window').width / 2.5),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
}
