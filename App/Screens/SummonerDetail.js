
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Strings from '../Components/Strings';
import StaticData from '../Components/StaticData';

export default class SummonerDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>summoner detail</Text>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container : {
        flex:1,
        paddingTop:64,
        backgroundColor:'#ddd'
    },
});