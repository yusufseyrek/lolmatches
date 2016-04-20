
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
            dataSource : ds.cloneWithRows(this.props.data),
            rankImageSize : 0
        }
    }
    render() {
        return ( 
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
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
        var cellBg = this.props.cellColor;
        if(rowData.itsMe)
            cellBg = "#FFF7BF";
        var stats = Utils.calculateStats(rowData.champion_stats);
        var rankImage = StaticData.getRankedIcon(rowData.rank.tier);
        let {rankImageSize} = this.state; 
        return(
            <TouchableHighlight onPress={()=>this.onSummonerClick(rowData)} key={"item-"+index}>
                <View style={[styles.cell]}>
                    <View style={[styles.bgView,{backgroundColor: cellBg}]}></View>
                    <View style={styles.rowContainerView}>
                        
                        <View style={[styles.columnView,{marginRight:10}]}>
                            <View style={styles.rowView}>
                                <Image style={styles.championImage} source={{uri : rowData.championSquareImage}}/>
                            </View>
                            <View style={styles.rowView}>
                                <Image style={styles.spellImage} source={{uri : rowData.spells[0].spellUrl}}/>
                                <Image style={styles.spellImage} source={{uri : rowData.spells[1].spellUrl}}/>
                            </View>
                        </View>
                        
                        <View style={[styles.columnView,{flex:1}]}>
                            
                            <View style={[styles.rowView,{justifyContent:'space-between', alignItems:'center'}]}>
                                <Text style={[styles.textView,{fontSize:17}]}>{`${rowData.championName} (${stats.totalPlayed})`}</Text>
                                <Text style={[styles.textView,{fontSize:15}]}>{`${Strings.get("winrate")}: ${stats.winRate}%`}</Text>
                            </View>
                            <View style={[styles.rowView,{justifyContent:'space-between',borderBottomWidth:.5,borderColor:'white',paddingBottom:5,marginVertical:5}]}>
                                <Text style={styles.textView}>{`${rowData.summonerName}`}</Text>
                                <Text style={styles.textView}>{rowData.rank.rankString}</Text>
                            </View>
                            <View style={styles.rowView} onLayout={(event)=>{
                                //TODO fix laggin while rendering
                                if(!rankImageSize){
                                    this.setState({rankImageSize: event.nativeEvent.layout.height});
                                }
                            }}>
                                <Image style={[styles.rankImage,{width:rankImageSize,height:rankImageSize}]} source={rankImage}/>
                                <View style={styles.columnView}>
                                    <Text style={styles.textView}>KDA</Text>
                                    <Text style={styles.textView}>{Strings.get("ranked").toUpperCase()}</Text>
                                    <Text style={styles.textView}>{Strings.get("masteries").toUpperCase()}</Text>
                                </View>
                                <View style={[styles.columnView,{marginHorizontal:5}]}>
                                    <Text style={styles.textView}>:</Text>
                                    <Text style={styles.textView}>:</Text>
                                    <Text style={styles.textView}>:</Text>
                                </View>
                                <View style={styles.columnView}>
                                    <Text style={styles.textView}>{`${stats.kill} / ${stats.death} / ${stats.assist}`}</Text>
                                    <Text style={styles.textView}>{`${stats.wins} / ${stats.losses}`}</Text>
                                    <Text style={styles.textView}>{`${rowData.masterie.ferocity} / ${rowData.masterie.cunning} / ${rowData.masterie.resolve}`}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};

var styles = StyleSheet.create({
    rankImage:{
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        resizeMode:'stretch'
    },
    bgView:{
        position:'absolute',
        top:0,left:0,right:0,bottom:0,
        opacity:.6
    },
    textView:{
        backgroundColor:'transparent',
        color:'white',
        fontSize:13
    },
    spellImage:{
        width:35,
        height:35
    },
    championImage:{
        width:70,
        height:70
    },
    seperator : {
        flex:1,
        height:.5,
        backgroundColor:'#ddd'   
    },
    cell : {
        flex : 1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#fff',
        marginBottom:10,
    },
    rowView:{
        flexDirection :'row',
    },
    rowContainerView:{
        margin:10,
        flex:1,
        flexDirection :'row',
    },
    columnView:{
        flexDirection:'column'
    }
});