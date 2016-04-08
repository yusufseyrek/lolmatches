
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
            renderRow={this.renderRow}
            renderSeparator={this.renderSeparator}/>
        );
    }
    renderSeparator(d){
        return(
            <View style={styles.seperator}></View>
        )
    }
    renderRow(rowData, section, index){
        console.log(rowData);
        var rankImage = StaticData.getRankedIcon(rowData.rank.tier);
        return(
            <View style={styles.cell}>
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
                    <View style={styles.rowView}>
                        <Text style={styles.greyText}>KDA: </Text>
                        <Text style={styles.greenText}>11</Text>
                        <Text style={styles.blackText}> / </Text>
                        <Text style={styles.redText}>11</Text>
                        <Text style={styles.blackText}> / </Text>
                        <Text style={styles.yellowText}>11</Text>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.columnView}>
                            <Text style={styles.greyText}>{Strings.get("wins")}</Text>
                            <Text style={styles.blackText}>1,222</Text>
                        </View>
                        <View style={styles.columnView}>
                            <Text style={styles.greyText}>{Strings.get("ranked")}</Text>
                            <View style={styles.rowView}>
                                <Text style={styles.greenText}>{111}</Text>
                                <Text style={styles.blackText}> / </Text>
                                <Text style={styles.redText}>{222}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.columnView}>
                            <Text style={styles.greyText}>{Strings.get("masteries")}</Text>
                            <Text style={styles.blackText}>12/18/0</Text>
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
    columnView:{
        flex:1,
        flexDirection:'column'
    },
    blackText:{
        color:'#000',
        fontSize:12
    },
    greyText:{
        color:'#aaa',
        fontSize:12
    },
    greenText:{
        color:'green',
        fontSize:12
    },
    redText:{
        color:'red',
        fontSize:12
    },
    yellowText:{
        color:'orange',
        fontSize:12
    }
    
});