

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

let UiLayer = {
  bind(that, features){
    return(
      this.spinner(that)
    )
  },
  spinner(that){
    return <Spinner visible={that.state.spinnerVisiblity} />
  },
  isSpinnerVisible(that, v){
    that.setState({spinnerVisiblity : v});
  }
};

module.exports = UiLayer;
