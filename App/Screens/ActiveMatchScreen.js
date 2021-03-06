
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

let { width, height } = Dimensions.get("window");

import {Actions} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomScrollableTabBar from '../Components/CustomScrollableTabBar';
import SummonerList from './SummonerList';


var LanguageInterface = require('../Components/LanguageInterface');
var StaticData = require('../Components/StaticData');

export default class ActiveMatchScreen extends Component {
    constructor(props){
        super(props);
        console.log(props)
        var blueTeamMembers = [], purpleTeamMembers = [];
        this.props.data.participants.map(function (data) {
            data.region = props.data.region;
            if (data.teamId == 100) {
                blueTeamMembers.push(data);
            }else{
                purpleTeamMembers.push(data);   
            }
        });
        this.state = {
            blueTeamMembers : blueTeamMembers,
            purpleTeamMembers : purpleTeamMembers
        };
    }
    render() {
        var {data} = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage} source={require('../Assets/Images/bg.jpg')} />
                <View style={styles.containerRowView}>
                    <TouchableOpacity style={styles.backButton} onPress={()=>Actions.pop()}>
                        <Text style={styles.backButtonText} >{LanguageInterface.get("back").toUpperCase()}</Text>
                    </TouchableOpacity>
                    <View style={styles.columnView}>
                        <Text style={[styles.gameTypeText,{color:'#FFB347'}]}>{`${data.gameQueueConfig}`}</Text>
                        <Text style={[styles.gameTypeText,{color:'white'}]}>{`${data.map}`}</Text>
                    </View>
                </View>
                <ScrollableTabView style={{flex:1}} renderTabBar={()=> <CustomScrollableTabBar />}>
                    <SummonerList data={this.state.blueTeamMembers} cellColor={StaticData.BLUE_COLOR} tabLabel={LanguageInterface.get("blueteam").toUpperCase()}/>
                    <SummonerList data={this.state.purpleTeamMembers} cellColor={StaticData.PURPLE_COLOR} tabLabel={LanguageInterface.get("purpleteam").toUpperCase()}/>
                </ScrollableTabView>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    columnView:{
        flexDirection:'column'
    },
    container : {
        flex:1
    },
    bgImage:{
        width:width,
        height:height,
        position:'absolute'
    },
    containerRowView:{
        flexDirection:'row',
        marginHorizontal : 20,
        marginTop : 30,
        marginBottom : 10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    backButtonText:{
        backgroundColor:'transparent',
        color : 'white',
        fontSize : 19
    },
    gameTypeText:{
        backgroundColor:'transparent',
        fontSize : 19,
        textAlign:'right'
    },
    logoImage:{
        width:132,
        height:50,
        resizeMode:'contain'
    }
});