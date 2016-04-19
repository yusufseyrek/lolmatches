
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


var Strings = require('../Components/Strings');
var StaticData = require('../Components/StaticData');

export default class GameInfo extends Component {
    constructor(props){
        super(props);
        var blueTeamMembers = [], purpleTeamMembers = [];
        this.props.data.participants.map(function (data) {
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
        return (
            <View style={styles.container}>
                <Image style={styles.bgImage} source={require('../Assets/Images/bg.jpg')} />
                <View style={styles.containerRowView}>
                    <TouchableOpacity style={styles.backButton} onPress={()=>Actions.pop()}>
                        <Text style={styles.backButtonText} >{Strings.get("back").toUpperCase()}</Text>
                    </TouchableOpacity>
                    <Image style={styles.logoImage} source={require('../Assets/Images/lol-logo.png')}/>
                </View>
                <ScrollableTabView style={{flex:1}} renderTabBar={()=> <CustomScrollableTabBar />}>
                    <SummonerList data={this.state.blueTeamMembers} cellColor={StaticData.BLUE_COLOR} tabLabel={Strings.get("blueteam").toUpperCase()}/>
                    <SummonerList data={this.state.purpleTeamMembers} cellColor={StaticData.PURPLE_COLOR} tabLabel={Strings.get("purpleteam").toUpperCase()}/>
                </ScrollableTabView>
            </View>
        );
    }
};

var styles = StyleSheet.create({
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
        marginTop : 20,
        marginBottom : 10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    backButtonText:{
        backgroundColor:'transparent',
        color : 'white',
        fontSize : 19
    },
    logoImage:{
        width:132,
        height:50,
        resizeMode:'contain'
    }
});