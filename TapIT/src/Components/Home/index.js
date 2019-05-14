import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import Home from './Home';

export default class HomePage extends Component {
  render() {
    return (
      <MenuProvider>
        <Home />
      </MenuProvider>
    );
  }
}
