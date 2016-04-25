
console.disableYellowBox = true; 

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native';

var LanguageInterface = require('../Components/LanguageInterface');
var Utils = require('../Components/Utils');
var StaticData = require('../Components/StaticData');
import SelectSummoner from './SelectSummoner';
import ActiveMatchScreen from './ActiveMatchScreen';
import SummonerProfile from './SummonerProfile';
import MatchList from './MatchList';
import SettingsScreen from './SettingsScreen';

import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        return defaultReducer(state, action);
    }
};

class TabIcon extends React.Component {
    render(){
        var activeTextStyle = {
            color : StaticData.GOLD_COLOR,
            fontWeight : 'bold'
        };
        var inActiveTextStyle = {
            color : "white",
            fontWeight : 'normal'
        };
        return (
            <Text style={this.props.selected ? activeTextStyle : inActiveTextStyle}>{this.props.title}</Text>
        );
    }
}

export default class lolnexus extends Component {
    constructor(props){
        super(props);
        
        this.state={
            isLanguageReady : false,
            langKey : ''
        };
    }
    componentWillMount(){
        LanguageInterface.getCurrentLanguage().then((languageString)=>{
            if(languageString){
                this.setState({isLanguageReady : true});
            }
        })
        
        if(Platform.OS === "android"){
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('transparent', true);
        }
        else{
            StatusBar.setBarStyle('light-content', true);
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                {Utils.renderIf(this.state.isLanguageReady,
                    <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#000'}}>
                        <Scene key="modal" component={Modal}>
                            <Scene key="root" hideNavBar={true}>
                                <Scene key="SelectSummoner" component={SelectSummoner} type="reset" initial={true}/>
                                <Scene key="ActiveMatchScreen" panHandlers={null} component={ActiveMatchScreen}/>
                                
                                <Scene key="SummonerDetailTab" tabBarStyle={{backgroundColor:'black',borderTopWidth:1,borderColor:'white'}} panHandlers={null} tabs={true} direction="vertical" default="SummonerDetail" >
                                    <Scene direction="vertical" component={SummonerProfile} icon={TabIcon} key="SummonerProfile" title={LanguageInterface.get("summonerprofile")} hideNavBar={true} />
                                    <Scene direction="vertical" component={MatchList} icon={TabIcon} key="MatchList" title={LanguageInterface.get("matchhistory")} hideNavBar={true} />
                                </Scene>
                                
                                <Scene key="SettingsScreen" direction="vertical" component={SettingsScreen}/>
                            </Scene>
                        </Scene>
                    </Router>
                )}
            </View>  
        )
    }
};