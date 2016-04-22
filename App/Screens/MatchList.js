
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
var NetworkManager = require('../Components/NetworkManager');
var UiLayer = require('../Components/UiLayer');


export default class MatchList extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        this.state = {
            spinnerVisiblity: true,
            dataSource : ds.cloneWithRows([])
        }
    }
    componentDidMount(){
        let {summonerData} = this.props;
        //TODO userId -> summonerId
        //TODO Backend should return Match Type
        UiLayer.isSpinnerVisible(this, true);
        NetworkManager.request("getMatchList",{userId: summonerData.summonerId, summonerRegion: summonerData.region},(matchList)=>{
            UiLayer.isSpinnerVisible(this, false);
            if(!matchList.err)
                this.setState({dataSource : this.state.dataSource.cloneWithRows(matchList)});
        });
    }
    render() {
        var { summonerData } = this.props;
        
        return (
            <View style={{flex:1,paddingBottom:50}}>
                <Image style={styles.bgImage} source={require('../Assets/Images/bg.jpg')} />
                <View style={styles.container}>
                    <View style={styles.containerView}>
                        <Text style={styles.summonerName}>{summonerData.summonerName}</Text>
                    </View>
                    
                    <ListView 
                        style={{marginTop:20}}
                        dataSource={this.state.dataSource}
                        enableEmptySections
                        renderRow={this.renderRow.bind(this)}/>
                </View>    
                <TouchableOpacity style={styles.closeButton} onPress={()=>Actions.pop()}>
                    <Image style={styles.closeButtonImage} source={require('../Assets/Images/close.png')}/>
                </TouchableOpacity>
                {UiLayer.bind(this,"")}
            </View>
        );
    }

    renderRow(rowData, section, index){
        var cellBgColor = rowData.myData.winner ? 'green' : 'red';
        return(
            <View style={[styles.rowView,styles.cellView]} key={`matchlistkey-${index}`}>
                
                <View style={[styles.maskView,{backgroundColor: cellBgColor}]}></View>
                
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
                        
                        <View style={[styles.columnView, {marginRight:10, alignItems:'stretch'}]}>
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
    bgImage:{
        width:width,
        height:height,
        position:'absolute'
    },
    textView:{
        backgroundColor:'transparent',
        color:'#fff' ,
        fontSize:13,
        marginTop:3
    },
    kda:{
        backgroundColor:'transparent',
        color:'#fff' ,
        fontSize:10,
        marginTop:3
    },
    cellView:{
        flex:1,
        overflow:'hidden',
        marginBottom:5,
        borderBottomWidth:.5,
        borderColor:'white'
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
    maskView:{
        position:'absolute',
        top:0, left:0, right:0, bottom:0,
        opacity:.3
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