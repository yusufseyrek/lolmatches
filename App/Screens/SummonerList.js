
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

export default class SummonerList extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.state = {
            dataSource : ds.cloneWithRows(this.props.data)
        }
    }
    render() {
        return ( 
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                renderSeparator={this.renderSeparator}/>
        );
    }
    renderSeparator(section,index){
        return(
            <View key={"seperator-"+index} style={styles.seperator}></View>
        );
    }
    onSummonerClick(rowData){
        Actions.SummonerDetailTab({summonerData : rowData});
    }
    renderRow(rowData, section, index){
        var cellBg = (index % 2 == 0) ? "#F5F5F5" : "#FFFFFF";
        if(rowData.itsMe)
            cellBg = "#FFF7BF";
        var stats = Utils.calculateStats(rowData.champion_stats);
        var rankImage = StaticData.getRankedIcon(rowData.rank.tier);
        return(
            <TouchableHighlight onPress={()=>this.onSummonerClick(rowData)}>
                <View style={[styles.cell, {backgroundColor : cellBg}]} key={"item-"+index}>
                    <View style={styles.columnView}>
                        <View style={styles.rowView}>
                            <Image style={styles.championImage} source={{uri : rowData.championSquareImage}}/>
                        </View>
                        <View style={styles.rowView}>
                            <Image style={styles.spellImage} source={{uri : rowData.spells[0].spellUrl}}/>
                            <Image style={styles.spellImage} source={{uri : rowData.spells[1].spellUrl}}/>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};

var styles = StyleSheet.create({
    spellImage:{
        width:25,
        height:25
    },
    championImage:{
        width:50,
        height:50
    },
    seperator : {
        flex:1,
        height:.5,
        backgroundColor:'#ddd'   
    },
    cell : {
        flex : 1,
        flexDirection:'row',
        backgroundColor:'#fff'
    },
    rowView:{
        flexDirection :'row',
    },
    rowContainerView:{
        marginTop:7,
        flexDirection :'row',
    },
    columnView:{
        flex:1,
        flexDirection:'column'
    }
});