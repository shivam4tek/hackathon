import React, { Component } from 'react';

import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './Components/Login';
import CompleteProfile from './Components/CompleteProfile';
import WelcomeScreen from './Components/WelcomeScreen';
import Home from './Components/Home';
import ColorWheelModal from './Components/ColorWheel';

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <Router>
       <Stack key="root">
         <Scene key="login" component={Login} title="Login" hideNavBar/>
         <Scene key="completeProfile" component={CompleteProfile} title="CompleteProfile" hideNavBar/>
         <Scene key="welcomescreen" component={WelcomeScreen} title="My Home" hideNavBar/>
         <Scene key="home" component={Home} title="My Home" hideNavBar/>
         <Scene key="colorwheel" component={ColorWheelModal} title="My Home" hideNavBar/>
       </Stack>
     </Router>

    );
  }
}
