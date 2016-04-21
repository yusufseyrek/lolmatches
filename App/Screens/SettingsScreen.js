
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native';

import Strings from '../Components/Strings';

export default class SettingsScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Text>Settings</Text>
        )
    }
}