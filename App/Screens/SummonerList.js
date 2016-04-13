
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
                    <View style={styles.left}>
                        <Text style={styles.summonerName}>{rowData.summonerName}</Text>
                        <View style={styles.championImageContainer}>
                            <Image style={styles.championImage} source={{uri : rowData.championSquareImage}}/>
                            <View style={styles.spellImageContainer}>
                                <Image style={styles.spellImageTop} source={{uri : rowData.spells[0].spellUrl}}/>
                                <Image style={styles.spellImageBottom} source={{uri : rowData.spells[1].spellUrl}}/>
                            </View>
                            <Text style={styles.championName}>{`${rowData.championName} (${rowData.champion_stats.total_games})`}</Text>
                        </View>
                        <View style={styles.summonerRankContainer}>
                            <Image style={styles.rankImage} source={rankImage}/>
                            <Text style={styles.rankText}>{rowData.rank.rankString}</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.rowContainerView}>
                            <Text style={styles.greyText}>KDA: </Text>
                            <Text style={styles.greenText}>{stats.kill}</Text>
                            <Text style={styles.blackText}> / </Text>
                            <Text style={styles.redText}>{stats.death}</Text>
                            <Text style={styles.blackText}> / </Text>
                            <Text style={styles.yellowText}>{stats.assist}</Text>
                        </View>
                        <View style={styles.rowContainerView}>
                            <View style={styles.columnView}>
                                <Text style={styles.greyText}>{Strings.get("wins")}</Text>
                                <Text style={styles.blackText}>{rowData.champion_stats.total_games}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.greyText}>{Strings.get("ranked")}</Text>
                                <View style={styles.rowView}>
                                    <Text style={styles.greenText}>{stats.wins}</Text>
                                    <Text style={styles.blackText}> / </Text>
                                    <Text style={styles.redText}>{stats.losses}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rowContainerView}>
                            <View style={styles.columnView}>
                                <Text style={styles.greyText}>{Strings.get("masteries")}</Text>
                                <Text style={styles.blackText}>{`${rowData.masterie.ferocity} / ${rowData.masterie.cunning} / ${rowData.masterie.resolve}`}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.bigText}>{`${stats.winRate}%`}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};

var styles = StyleSheet.create({
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
    left:{
        flex:1,
    },
    right:{
        flex:1,
    },
    championImageContainer: {
        marginLeft: 5,
        flexDirection:'row',
        alignItems:'center'
    },
    spellImageContainer:{
        marginLeft:1,
        flexDirection:'column'  
    },
    spellImageTop:{
      width:21,
      height:21  
    },
    spellImageBottom:{
      width:21,
      height:21,
      marginTop:1
    },
    championName:{
        marginLeft:5,
        fontWeight:'bold'
    },
    summonerRankContainer:{
        marginLeft: 11,
        marginTop:5,marginBottom:5,
        flexDirection:'row',
        alignItems:'center'
    },
    rankImage:{
        width:30,
        height:30,
    },
    rankText:{
        marginLeft:5
    },
    championImage:{
        width:43,
        height: 43,
    },
    summonerName:{
        margin: 5,
        fontSize:14
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
    },
    blackText:{
        color:'black',
        fontSize:14
    },
    greyText:{
        color:'grey',
        fontSize:14
    },
    greenText:{
        color:'green',
        fontSize:14
    },
    redText:{
        color:'red',
        fontSize:14
    },
    yellowText:{
        color:'orange',
        fontSize:14
    },
    bigText:{
        color:'black',
        alignSelf:'center',
        fontSize:25
    }
    
});