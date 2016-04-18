
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

var { width, height } = Dimensions.get("window");

import {Actions, Reducer} from 'react-native-router-flux';
import SummonerDetail from './SummonerDetail';

var StaticData = require('../Components/StaticData');
var Strings = require('../Components/Strings'); 
var Utils = require('../Components/Utils');


export default class MatchList extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.state = {
            dataSource : ds.cloneWithRows(StaticData.matchList)
        }
    }
    render() {
        var { summonerData } = this.props;
        
        return (
            <View style={{flex:1,paddingBottom:50}}>
                <View style={styles.container}>
                    <View style={styles.containerView}>
                        <Text style={styles.summonerName}>{summonerData.summonerName}</Text>
                    </View>
                    
                    <ListView 
                        style={{marginTop:20}}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}/>
                </View>    
                <TouchableOpacity style={styles.closeButton} onPress={()=>Actions.pop()}>
                    <Image style={styles.closeButtonImage} source={require('../Assets/Images/close.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
    renderRow(rowData, section, index){
        var cellBgColor = rowData.myData.winner ? 'green' : 'red';
        console.log(rowData)
        return(
            <View style={[styles.rowView,styles.cellView]} key={`matchlistkey-${index}`}>
                <Image style={styles.splashImage} source={{uri: rowData.myData.championSplashImage}}>
                    <View style={[styles.maskView,{backgroundColor: cellBgColor}]}></View>
                </Image>
                
                <View style={[styles.rowView,{width : width, justifyContent:'space-between'}]}>
                    <View style={styles.columnView}>
                        <Image style={styles.championImage} source={{uri : rowData.myData.championSquareImage}}>
                            <View style={styles.championNameView}>
                                <Text style={styles.championName}>{rowData.myData.championName}</Text>
                            </View>
                        </Image>
          
                    </View>
                    
                    <View style={styles.columnView}>
                        <View style={styles.rowView}>
                            <Text style={styles.textView}>{`${rowData.myData.kills}/${rowData.myData.deaths}/${rowData.myData.assists}`}</Text>
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.textView}>{Utils.calculateKda(rowData.myData.kills,rowData.myData.deaths,rowData.myData.assists)}</Text>
                            <Text style={styles.kda}>KDA</Text>
                        </View>
                        </View>
                        <View style={styles.columnView}>
                        <View style={styles.rowView}>
                                                             
                            <Text style={styles.textView}>{Utils.calculateTotalGold(rowData.myData.totalGold)}K</Text>
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.kda}>Gold</Text>
                        </View>
                        <View style={styles.rowView}>
                        
                            <Text style={styles.textView}>{`${rowData.myData.minionsKilled}`}</Text>
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.kda}>Creep</Text>
                        </View>
                        </View>
                        
                        <View style={styles.columnView}>
                        <View style={styles.rowView}>
                            <Image style={styles.spellImageTop} source={{uri : rowData.myData.spells[0].spellUrl}}/>
                            
                        </View>
                        <View style={styles.rowView}>
                            <Image style={styles.spellImageTop} source={{uri : rowData.myData.spells[1].spellUrl}}/>
                            
                        </View>
                        </View>
                        
                        <View style={[styles.columnView, {marginRight:10}]}>
                        <View style={styles.rowView}>
                            <Image style={styles.spellImageTop} source={{uri : rowData.myData.items[0]}}/>
                            <Image style={styles.spellImageTop} source={{uri : rowData.myData.items[1]}}/>
                            <Image style={styles.spellImageTop} source={{uri : rowData.myData.items[2]}}/>
                        </View>
                        <View style={styles.rowView}>
                            <Image style={styles.spellImageBottom} source={{uri : rowData.myData.items[3]}}/>
                            <Image style={styles.spellImageBottom} source={{uri : rowData.myData.items[4]}}/>
                            <Image style={styles.spellImageBottom} source={{uri : rowData.myData.items[5]}}/>
                        </View>
                        
                        
                    </View>
                </View>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    textView:{
        backgroundColor:'transparent',
        color:'#fff' ,
        fontSize:13,
        marginTop:3
    },
    kda:{
        backgroundColor:'transparent',
        color:'#fff' ,
        fontSize:9,
        marginTop:3
    },
    cellView:{
        overflow:'hidden'
    },
    championNameView:{
        position:'absolute',
        bottom:0,left:0,right:0,
    },
    championName:{
        backgroundColor:'#222',
        opacity:.8,
        textAlign:'center',
        marginVertical:3,
        color:'#FFCD03'
    },
    splashImage:{
        width:width,
        height:250,
        position:'absolute',
        resizeMode:'cover'
    },
    maskView:{
        flex:1,
        opacity:.7
    },
    championImage:{
        width: width/4,
        height:width/4,
        margin:10
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
        flexDirection:'column',
        alignItems:'center'
    },
    summonerName:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'transparent',
        color:'#FFF'
    },
    container: {
        flex: 1,
        paddingTop:20
    },
    closeButtonImage:{
        width:35,
        height:35
    },
    closeButton:{
        position:'absolute',
        top:20,
        right:15
    },
    spellImageTop:{
        width:width/13,
        height:width/13,
        margin:1
    },
    spellImageBottom:{
        width:width/13,
        height:width/13,
        margin:1
    }
});