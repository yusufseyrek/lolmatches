
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';


var StaticData = require('../Components/StaticData');
var Strings = require('../Components/Strings'); 

export default class SummonerList extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        console.log(this.props.data);
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
        )
    }
    calculateStats(stats){
        var kill,death,assist,winRate;
        
        if(stats.kills == null || stats.deaths == null || stats.assists == null){
            return {kill : 0, death: 0, assist: 0, wins: 0, losses: 0, winRate: 0};
        }
        
        kill = parseInt(stats.total_games) / parseInt(stats.kills);
        death =  parseInt(stats.total_games) / parseInt(stats.deaths);
        assist = parseInt(stats.total_games) / parseInt(stats.assists);
        winRate = (parseInt(stats.wins) / (parseInt(stats.wins) + parseInt(stats.losses))) * 100;
        console.log(winRate)
        return {
            kill : kill.toFixed(1), 
            death: death.toFixed(1), 
            assist: assist.toFixed(1), 
            wins: stats.wins, 
            losses: stats.losses, 
            winRate: winRate.toFixed(0)
        };
    }
    renderRow(rowData, section, index){
        var cellBg = (index % 2 == 0) ? "#F5F5F5" : "#FFFFFF";
        if(rowData.itsMe)
            cellBg = "#FFF7BF";
        var stats = this.calculateStats(rowData.champion_stats);
        var rankImage = StaticData.getRankedIcon(rowData.rank.tier);
        return(
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