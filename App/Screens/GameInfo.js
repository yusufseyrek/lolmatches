
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import SummonerList from './SummonerList';
import Strings from '../Components/Strings';
import StaticData from '../Components/StaticData';

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
            <ScrollableTabView style={{paddingTop:64}}>
                <SummonerList data={this.state.blueTeamMembers} tabLabel={Strings.get("blueteam")}/>
                <SummonerList data={this.state.purpleTeamMembers} tabLabel={Strings.get("purpleteam")}/>
            </ScrollableTabView>
        );
    }
    renderRow(rowData){
        console.log(rowData);
    }
};
