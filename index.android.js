/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './App/Screens/App';

class lolnexus extends Component {
  render() {
    return (
      <App/>
    );
  }
}
AppRegistry.registerComponent('lolnexus', () => lolnexus);
