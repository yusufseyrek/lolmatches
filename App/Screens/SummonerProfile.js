
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

var { width, height } = Dimensions.get("window");

import {Actions} from 'react-native-router-flux';

var LanguageInterface = require('../Components/LanguageInterface');
var StaticData = require('../Components/StaticData');
var Utils = require('../Components/Utils');
var UiLayer = require('../Components/UiLayer');
var NetworkManager = require('../Components/NetworkManager');

export default class SummonerProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            spinnerVisiblity: false,
            mostPlayedChampions : [],
            summonerInfo: {},
            leagueData:[]
        }
    }
    componentDidMount(){
        var { summonerData } = this.props;

        UiLayer.isSpinnerVisible(this, true);
        NetworkManager.request("getSummonerStats",{summonerName: summonerData.summonerName, summonerRegion: summonerData.region},(response)=>{
            UiLayer.isSpinnerVisible(this, false);
            if(!response.err || !response.error){
                this.setState({mostPlayedChampions: response.ranked.champions, summonerInfo: response.summoner, leagueData: response.league});
            }
        });

    }
    rankedViews(data){
        return data.map((item, index)=>{
            let rankImage = StaticData.getRankedIcon(item.tier.toLowerCase());
            let rankString = `${item.tier} ${item.entries[0].division}`;
            let matchType = LanguageInterface.get(Utils.converMatchType(item.queue));
            return (
                <View key={`rankedItem-${index}`}>
                    <View style={[styles.rowView,{marginHorizontal:15}]}>
                        <View style={[styles.columnView,{flex:1}]}>
                            <View style={[styles.columnView,{alignItems:'center'}]}>
                                <Text style={[styles.heading2,{color:StaticData.GOLD_COLOR}]}>{matchType}</Text>
                                <Image style={styles.rankImage} source={rankImage}/>
                                <Text style={styles.heading2}>{item.entries[0].playerOrTeamName}</Text>
                            </View>
                        </View>
                        <View style={styles.seperatorVertical}></View>
                        <View style={[styles.columnView,{flex:1}]}>
                            <View style={[styles.columnView,{alignItems:'center'}]}>
                                <Text style={styles.heading2}>{rankString}</Text>
                                <Text style={[styles.heading4,{color:StaticData.GOLD_COLOR}]}>{`${item.entries[0].leaguePoints} LP`}</Text>
                                <View style={[styles.rowView,{marginTop:10}]}>
                                    <Text style={[styles.heading3,{color:'green'}]}>{item.entries[0].wins}</Text>
                                    <Text style={[styles.heading3,{color:'white'}]}> Wins </Text>
                                </View>
                                <View style={[styles.rowView]}>
                                    <Text style={[styles.heading3,{color:'red'}]}>{item.entries[0].losses}</Text>
                                    <Text style={[styles.heading3,{color:'white'}]}> Looses </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.seperatorHorizontal}></View>
                </View>
            );
        });
    }
    mostPlayedViews(data){
        let views = data.map((item, index)=>{
            let borderWidth = (index == data.length-1) ? 0 : .5;
            let backgroundColor = (index%2 == 0) ? 'transparent' : '#111';   
            let kda = {
                kill : (item.stats.totalChampionKills / item.stats.totalSessionsPlayed).toFixed(1),
                death : (item.stats.totalDeathsPerSession / item.stats.totalSessionsPlayed).toFixed(1),
                assist : (item.stats.totalAssists / item.stats.totalSessionsPlayed).toFixed(1),
                minion : (item.stats.totalMinionKills / item.stats.totalSessionsPlayed).toFixed(1),
            };
            return (
                <View style={[styles.rowView,styles.mostPlayedItem,{borderBottomWidth: borderWidth,backgroundColor:backgroundColor}]} key={`mostPlayedItem-${index}`}>
                    <View style={[styles.rowView,{flex:1}]}>
                        <Image style={styles.championImage} source={{uri : item.championObject.squareImage}}/>
                        <View style={[styles.columnView,{marginLeft:5}]}>
                            <Text style={[styles.heading3,{fontWeight:'600'}]}>{item.championObject.name}</Text>
                            <View style={[styles.rowView,{marginTop:3}]}>
                                <Text style={[styles.heading4,{color:'green'}]}>{kda.kill}</Text>
                                <Text style={[styles.heading5,{color:'white'}]}> / </Text>
                                <Text style={[styles.heading4,{color:'red'}]}>{kda.death}</Text>
                                <Text style={[styles.heading5,{color:'white'}]}> / </Text>
                                <Text style={[styles.heading4,{color:'orange'}]}>{kda.assist}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.seperatorVertical,{height:30}]}></View>
                    <View style={[styles.columnView,{flex:1}]}>
                        <Text style={styles.heading4}>{`${item.stats.totalSessionsWon} Win / ${item.stats.totalSessionsLost} Loss`}</Text>
                        <Text style={styles.heading4}>{`Creep: ${kda.minion}/game`}</Text>
                    </View>
                </View>
            )
        });
        if(data.length > 0){
            views.unshift(
                <View style={[styles.rowView,{margin:15}]} key={"most-played-title"}>
                    <Text style={[styles.heading2,{fontWeight:'bold'}]}>Most Played Champions</Text>
                </View>
            );
        }
        return views;
    }
    render() {
        let {mostPlayedChampions, summonerInfo, leagueData} = this.state;
        let championName = "";
        if(summonerInfo.name)
            championName = `${summonerInfo.name} (${summonerInfo.summonerLevel})`;
        return (
            <View style={{flex:1}} >
                <Image style={styles.splashImage} source={require('../Assets/Images/bg.jpg')} />
                <View style={styles.container}>
                    <View style={[styles.containerView,{marginTop:25, justifyContent:'center'}]}>
                        <View style={styles.rowView}>
                            <Image style={styles.summonerIcon} source={{uri : summonerInfo.iconImage}}/>
                            <Text style={styles.championName}>{championName}</Text>
                        </View>
                    </View>
                    <View style={styles.seperatorHorizontal}></View>
                    <ScrollView>
                        {this.rankedViews(leagueData)}
                        <View style={styles.columnView}>
                            {this.mostPlayedViews(mostPlayedChampions)}
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={()=>Actions.pop()}>
                    <Image style={styles.closeButtonImage} source={require('../Assets/Images/close.png')}/>
                </TouchableOpacity>
                {UiLayer.bind(this,"")}
            </View>
        );
    }
};

var styles = StyleSheet.create({

    mostPlayedItem:{
        flexDirection:'row',
        marginHorizontal:15,
        paddingVertical:5,
        borderColor:'white',
    },
    championImage:{
        width: 50,
        height:50,
        borderRadius:3
    },
    heading2:{

        backgroundColor:'transparent',
        fontSize:20,
        color:'white'
    },
    heading3:{

        backgroundColor:'transparent',
        fontSize:16,
        color:'white'
    },
    heading4:{
        backgroundColor:'transparent',
        fontSize:14,
        color:'white'
    },
    heading5:{

        backgroundColor:'transparent',
        fontSize:12,
        color:'white'
    },
    container: {
        flex: 1,
        paddingTop:20
    },
    containerView:{
        flexDirection:'row',
        marginLeft:15,marginRight:15,
        marginTop:10,
        alignItems:'center'
    },
    rowView:{
        flexDirection:'row',
        alignItems:'center'
    },
    columnView:{
        flexDirection:'column'
    },
    summonerName:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'transparent',
        color:'#FFF'
    },
    summonerIcon:{
        width:60,
        height: 60,
        borderRadius:3
    },
    spellImageTop:{
        width:40,
        height:40
    },
    spellImageBottom:{
        width:40,
        height:40,
        marginTop:1
    },
    championName:{
        fontSize: 23,
        marginLeft:10,
        backgroundColor:'transparent',
        color:'#FFF'
    },
    rankImage:{
        width:100,
        height:100,
    },
    oldRankImage:{
        width:40,
        height:40
    },
    rankText:{
        fontSize: 17,
        backgroundColor:'transparent',
        color:'#FFF'
    },
    splashImage:{
        width:width,
        height:height,
        position:'absolute'
    },
    seperatorHorizontal:{
        width: width - 30,
        height:.5,
        backgroundColor:'grey',
        marginLeft:15,
        marginVertical:10
    },
    seperatorVertical:{
        width:.5,
        backgroundColor:'grey',
        margin:10,
        height:120
    },
    closeButtonImage:{
        width:35,
        height:35
    },
    closeButton:{
        position:'absolute',
        top:20,
        right:15
    }
});