
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
            console.log(item)
            let rankImage = StaticData.getRankedIcon(item.tier.toLowerCase());
            let rankString = `${item.tier} ${item.entries[0].division}`;
            return (
                <View>
                    <View style={[styles.rowView,{marginHorizontal:15}]}>
                        <View style={[styles.columnView,{flex:1}]}>
                            <View style={[styles.columnView,{alignItems:'center'}]}>
                                <Text style={[styles.heading2,{color:StaticData.GOLD_COLOR}]}>{item.queue}</Text>
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
    render() {
        let {mostPlayedChampions, summonerInfo, leagueData} = this.state;
        //var stats = Utils.calculateStats(summonerData.champion_stats);
        return (
            <View style={{flex:1}} >
                <Image style={styles.splashImage} source={require('../Assets/Images/bg.jpg')} />

                <View style={styles.container}>

                    <View style={[styles.containerView,{marginTop:25, justifyContent:'center'}]}>
                        <View style={styles.rowView}>
                            <Image style={styles.summonerIcon} source={{uri : summonerInfo.iconImage}}/>
                            <Text style={styles.championName}>{`${summonerInfo.name} (${summonerInfo.summonerLevel})`}</Text>
                        </View>
                    </View>

                    <View style={styles.seperatorHorizontal}></View>

                    <ScrollView>
                        {this.rankedViews(leagueData)}

                        <View style={styles.columnView}>
                            <Text style={styles.heading2}>Most Played Champions</Text>
                            <View style={[styles.rowView,styles.mostPlayedItem]}>
                                <View style={[styles.rowView,{flex:1}]}>
                                    <Image style={styles.championImage} source={null}/>
                                    <Text style={[styles.heading3,{marginLeft:10}]}>Miss Fortune</Text>
                                </View>
                                <View style={[styles.seperatorVertical,{height:30}]}></View>
                                <View style={[styles.columnView,{flex:1}]}>
                                    <View style={[styles.rowView,{marginBottom:3}]}>
                                        <Text style={styles.heading4}>KDA: </Text>
                                        <Text style={[styles.heading4,{color:'green'}]}>13</Text>
                                        <Text style={[styles.heading5,{color:'white'}]}> / </Text>
                                        <Text style={[styles.heading4,{color:'red'}]}>13</Text>
                                        <Text style={[styles.heading5,{color:'white'}]}> / </Text>
                                        <Text style={[styles.heading4,{color:'orange'}]}>13</Text>
                                    </View>
                                    <View style={styles.rowView}>
                                        <Text style={styles.heading4}>10 Wins / 30 Losses</Text>
                                    </View>
                                </View>
                            </View>
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
        paddingVertical:10,
        borderBottomWidth:.5,
        borderColor:'white'
    },
    championImage:{
        width: 50,
        height:50,
        borderRadius:3
    },
    heading2:{
        textAlign:'center',
        backgroundColor:'transparent',
        fontSize:20,
        color:'white'
    },
    heading3:{
        textAlign:'center',
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
        textAlign:'center',
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