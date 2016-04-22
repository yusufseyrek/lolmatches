
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import SummonerDetail from './SummonerDetail';

var StaticData = require('../Components/StaticData');
var LanguageInterface = require('../Components/LanguageInterface'); 

var Utils = require('../Components/Utils');

export default class SummonerList extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
        this.props.data.forEach((item,index)=>{
            item.isViewExtended = false;
        });
        
        this.state = {
            dataBlob : this.props.data,
            dataSource : ds.cloneWithRows(this.props.data),
            rankImageSize : 0
        }
    }
    render() {
        return ( 
            <ListView
                ref={"listView"}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
        );
    }
    onCellExtend(index, value){
        var {dataSource, dataBlob } = this.state;
        dataBlob[index].isViewExtended = value;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({dataSource: dataSource.cloneWithRows(dataBlob)});   
    }
    onSummonerSelect(rowData){
        Actions.SummonerDetailTab({summonerData : rowData});
    }
    renderExtendedView(runes){
        return(
            <View style={styles.extendedViewStyle}>
                <View style={styles.columnView}>
                    <Text style={styles.textView}>{`${LanguageInterface.get("runes").toUpperCase()} : `}</Text>
                </View>
                <View style={styles.columnView}>
                    {this.mapRunesView(runes)}
                </View>
            </View>
        );
    }
    renderDetailButton(rowData){
        return(
            <TouchableHighlight style={styles.detailButton} onPress={()=>this.onSummonerSelect(rowData)}>
                <Image style={styles.detailButtonImage} source={require('../Assets/Images/enter.png')}/>
            </TouchableHighlight>
        );
    }
    renderRow(rowData, section, index){
        var cellBg = this.props.cellColor;
        if(rowData.itsMe)
            cellBg = "#FFB347";
        var stats = Utils.calculateStats(rowData.champion_stats);
        var rankImage = StaticData.getRankedIcon(rowData.rank.tier);
        var {rankImageSize} = this.state;
        rankImageSize +=10;
        var extendedView = rowData.isViewExtended ? this.renderExtendedView(rowData.runes) : null;
        return(
            <TouchableHighlight onPress={()=>this.onCellExtend(index,!rowData.isViewExtended)} onLongPress={()=>this.onSummonerSelect(rowData)} key={"item-"+index}>
                <View style={[styles.cell]}>
                    <View style={[styles.bgView,{backgroundColor: cellBg}]}></View>
                    <Image style={[styles.rankImage,{width:rankImageSize,height:rankImageSize}]} source={rankImage}/>
                    <View style={styles.rowContainerView}>
                        
                        <View style={[styles.columnView,{marginRight:10}]}>
                            <View style={styles.rowView}>
                                <Image style={styles.championImage} source={{uri : rowData.championSquareImage}}/>
                                {Utils.renderIf(rowData.isViewExtended, this.renderDetailButton(rowData))}
                            </View>
                            <View style={styles.rowView}>
                                <Image style={styles.spellImage} source={{uri : rowData.spells[0].spellUrl}}/>
                                <Image style={styles.spellImage} source={{uri : rowData.spells[1].spellUrl}}/>
                            </View>
                        </View>
                        
                        <View style={[styles.columnView,{flex:1}]}>
                            
                            <View style={[styles.rowView,{justifyContent:'space-between', alignItems:'center',marginTop:3}]}>
                                <Text style={[styles.textView,{fontSize:16}]}>{`${rowData.championName} (${stats.totalPlayed})`}</Text>
                                <Text style={[styles.textView,{fontSize:13}]}>{`${LanguageInterface.get("winrate")}: ${stats.winRate}%`}</Text>
                            </View>
                            <View style={[styles.rowView,{justifyContent:'space-between',borderBottomWidth:.5,borderColor:'white',paddingBottom:5,marginVertical:5}]}>
                                <Text style={styles.textView}>{`${rowData.summonerName}`}</Text>
                                <Text style={styles.textView}>{rowData.rank.rankString}</Text>
                            </View>
                            <View style={styles.rowView} onLayout={(event)=>{
                                //TODO fix laggin while rendering
                                if(rankImageSize <= 10){
                                    this.setState({rankImageSize: event.nativeEvent.layout.height});
                                }}}>
                                <View style={styles.columnView}>
                                    <Text style={styles.textView}>KDA</Text>
                                    <Text style={styles.textView}>{LanguageInterface.get("ranked").toUpperCase()}</Text>
                                    <Text style={styles.textView}>{LanguageInterface.get("masteries").toUpperCase()}</Text>
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
                    {extendedView}
                </View>
            </TouchableHighlight>
        )
    }
    mapRunesView(runes){
        //TODO backend should return statistics only.
        if(!runes.statistics)
            return null;
            
        var views = runes.statistics.map(function(item, index) {
            return (<Text key={`runes-${index}`} style={[styles.textView]}>{`${item.value} ${item.label}`}</Text>);
        });
        
        return views;
    }
};

var styles = StyleSheet.create({
    detailButton:{
        position:'absolute',
        top:0,
        left:0,
        padding:15,
        backgroundColor:'black',
        opacity:.7
    },
    detailButtonImage:{
        width:40,
        height:40,
    },
    extendedViewStyle:{
        flexDirection:'row',
        margin:10,
        marginBottom: 0
    },
    rankImage:{
        position:'absolute',
        right:10,
        bottom:10,
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
        fontSize:13,
        textShadowColor:'black',
        textShadowOffset:{width:1,height:1},
        textShadowRadius:1
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
        flexDirection:'column',
        borderBottomWidth:1,
        borderColor:'#fff',
        marginBottom:10,
        paddingBottom:10
    },
    rowView:{
        flexDirection :'row',
    },
    rowContainerView:{
        margin:10,
        marginBottom: 0,
        flex:1,
        flexDirection :'row',
    },
    columnView:{
        flexDirection:'column'
    }
});