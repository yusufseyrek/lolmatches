
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
                    <View style={styles.containerView}>
                        <Text style={styles.summonerName}>{summonerData.summonerName}</Text>
                    </View>
                    
                    <View style={styles.containerView}>
                        <View style={styles.rowView}>
                            <Image style={styles.championImage} source={{uri : summonerData.championSquareImage}}/>
                            <View style={styles.columnView}>
                                <Image style={styles.spellImageTop} source={{uri : summonerData.spells[0].spellUrl}}/>
                                <Image style={styles.spellImageBottom} source={{uri : summonerData.spells[1].spellUrl}}/>
                            </View>
                            <Text style={styles.championName}>{`${summonerData.championName} (${stats.totalPlayed})`}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.containerView}>
                        <View style={styles.columnView}>
                            <Image style={styles.rankImage} source={rankImage}/>
                        </View>
                        <View style={[styles.rowView, {justifyContent:'space-between', flex:1}]}>
                            <Text style={styles.rankText}>{summonerData.rank.rankString}</Text>
                            <Image style={styles.oldRankImage} source={oldRankImage}/>
                        </View>
                    </View>
                    
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
    championImage:{
        width:81,
        height: 81,
        marginRight:2
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
        marginLeft:20,
        backgroundColor:'transparent',
        color:'#FFF'
    },
    rankImage:{
        width:60,
        height:60,
        marginLeft:10,
        marginRight:11,
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
    seperator:{
        width: width - 30,
        height:1,
        backgroundColor:'grey'
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