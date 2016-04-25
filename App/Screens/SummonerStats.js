
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image
} from 'react-native';

var { width, height } = Dimensions.get("window");

import {Actions} from 'react-native-router-flux';

var LanguageInterface = require('../Components/LanguageInterface');
var StaticData = require('../Components/StaticData');
var Utils = require('../Components/Utils');

export default class SummonerDetail extends Component {
    constructor(props){
        super(props);
    }
    mapRunesView(runes){
        //TODO backend should return statistics only.
        if(!runes.statistics)
            return null;

        var views = runes.statistics.map(function(item, index) {
            return (<Text key={`runes-${index}`} style={[styles.heading4]}>{`${item.value} ${item.label}`}</Text>);
        });

        return views;
    }
    render() {
        var { summonerData } = this.props;

        var rankImage = StaticData.getRankedIcon(summonerData.rank.tier);
        var oldRankImage = StaticData.getRankedIcon(summonerData.rank_last.tier);

        var stats = Utils.calculateStats(summonerData.champion_stats);
        return (
            <View style={{flex:1}} >
                <Image style={styles.splashImage} source={{uri: summonerData.championSplashImage}} />

                <View style={styles.container}>

                    <View style={[styles.containerView,{marginTop:25, justifyContent:'center'}]}>
                        <View style={styles.rowView}>
                            <Image style={styles.summonerIcon} source={{uri : summonerData.championSquareImage}}/>
                            <Text style={styles.championName}>{`${summonerData.summonerName} (30)`}</Text>
                        </View>
                    </View>

                    <View style={styles.seperatorHorizontal}></View>

                    <View style={[styles.rowView,{marginHorizontal:15}]}>
                        
                        <View style={[styles.columnView,{flex:1}]}>
                            <View style={[styles.columnView,{alignItems:'center'}]}>
                                <Text style={[styles.heading2,{color:StaticData.GOLD_COLOR}]}>Solo 5v5</Text>
                                <Image style={styles.rankImage} source={rankImage}/>
                                <View style={[styles.columnView,{flex:1,alignItems:'center'}]}>
                                    <Text style={styles.heading2}>Platinum IV</Text>
                                    <Text style={styles.heading4}>77 League Points</Text>
                                    <View style={[styles.rowView,{marginTop:10}]}>
                                        <Text style={[styles.heading2,{color:'green'}]}>20</Text>
                                        <Text style={[styles.heading3,{color:'white'}]}> / </Text>
                                        <Text style={[styles.heading2,{color:'red'}]}>27</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                        <View style={styles.seperatorVertical}></View>
                        
                        <View style={[styles.columnView,{flex:1}]}>
                            <View style={[styles.columnView,{alignItems:'center'}]}>
                                <Text style={[styles.heading2,{color:StaticData.GOLD_COLOR}]}>Solo 5v5</Text>
                                <Image style={styles.rankImage} source={rankImage}/>
                                <View style={[styles.columnView,{flex:1,alignItems:'center'}]}>
                                    <Text style={styles.heading2}>Platinum IV</Text>
                                    <Text style={styles.heading4}>77 League Points</Text>
                                    <View style={[styles.rowView,{marginTop:10}]}>
                                        <Text style={[styles.heading2,{color:'green'}]}>20</Text>
                                        <Text style={[styles.heading3,{color:'white'}]}> / </Text>
                                        <Text style={[styles.heading2,{color:'red'}]}>27</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                        
                        
                    </View>
                    
                    <View style={styles.seperatorHorizontal}></View>

                    <View style={styles.containerView}>
                        <View style={styles.seperator}></View>
                    </View>

                    <View style={[styles.containerView,{justifyContent:'space-between'}]}>
                        <View style={styles.columnView}>
                            <View style={styles.rowView}>
                                <Text style={styles.heading3}>KDA: </Text>
                                <Text style={[styles.heading3,{color:'green'}]}>{stats.kill}</Text>
                                <Text style={styles.heading3}> / </Text>
                                <Text style={[styles.heading3,{color:'red'}]}>{stats.death}</Text>
                                <Text style={styles.heading3}> / </Text>
                                <Text style={[styles.heading3,{color:'orange'}]}>{stats.assist}</Text>
                            </View>
                        </View>
                        <View style={[styles.columnView]}>
                            <View style={styles.rowView}>
                                <Text style={styles.heading3}>{`${LanguageInterface.get("ranked")}: `}</Text>
                                <Text style={[styles.heading3,{color:'green'}]}>{stats.wins}</Text>
                                <Text style={styles.heading3}> / </Text>
                                <Text style={[styles.heading3,{color:'red'}]}>{stats.losses}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.containerView,{justifyContent:'space-between'}]}>
                        <View style={styles.columnView}>
                            <View style={styles.rowView}>
                                <Text style={styles.heading3}>{`${LanguageInterface.get("wins")}: `}</Text>
                                <Text style={styles.heading3}>{summonerData.champion_stats.total_games}</Text>
                            </View>
                        </View>
                        <View style={styles.columnView}>
                            <View style={styles.rowView}>
                                <Text style={styles.heading3}>{`${LanguageInterface.get("masteries")}: `}</Text>
                                <Text style={styles.heading3}>{`${summonerData.masterie.ferocity}/${summonerData.masterie.cunning}/${summonerData.masterie.resolve}`}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerView}>
                        <View style={styles.columnView}>
                            <Text style={[styles.heading3]}>{`${LanguageInterface.get("runes")}: `}</Text>
                            <View style={styles.containerView}/>
                            {this.mapRunesView(summonerData.runes)}
                        </View>
                    </View>

                    <View style={styles.containerView}>
                        <View style={styles.seperator}></View>
                    </View>

                </View>

                <TouchableOpacity style={styles.closeButton} onPress={()=>Actions.pop()}>
                    <Image style={styles.closeButtonImage} source={require('../Assets/Images/close.png')}/>
                </TouchableOpacity>

            </View>
        );
    }
};

var styles = StyleSheet.create({
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
        position:'absolute',
        opacity:.4
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
        height:150
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