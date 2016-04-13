
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';



import {Actions} from 'react-native-router-flux';
import SummonerDetail from './SummonerDetail';

var StaticData = require('../Components/StaticData');
var Strings = require('../Components/Strings'); 

var Utils = require('../Components/Utils');

export default class MatchList extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        console.log("match list",this)
        this.state = {
            dataSource : ds.cloneWithRows([])
        }
    }
    render() {
        return (
            <Text style={{color:'#fff'}} >Maç geçmişi</Text>
        );
    }
    renderRow(rowData, section, index){
        
        return(
            <View></View>
        );
    }
};

var styles = StyleSheet.create({
     
});