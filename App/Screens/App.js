
console.disableYellowBox = true; 

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native';

var Strings = require('../Components/Strings');
var Utils = require('../Components/Utils');
import SelectSummoner from './SelectSummoner';
import ActiveMatchScreen from './ActiveMatchScreen';
import SummonerDetail from './SummonerDetail';
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
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

export default class lolnexus extends Component {
    constructor(props){
        super(props);
        
        this.state={
            isLanguageReady : false
        };
    }
    componentWillMount(){
        Strings.getCurrentLanguage().then((languageString)=>{
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
                                
                                <Scene key="SummonerDetailTab" panHandlers={null} tabs={true} direction="vertical" default="SummonerDetail" >
                                    <Scene direction="vertical" component={SummonerDetail} icon={TabIcon} key="SummonerDetail" title={Strings.get("summonerdetails")} hideNavBar={true} />
                                    <Scene direction="vertical" component={MatchList} icon={TabIcon} key="MatchList" title={Strings.get("matchhistory")} hideNavBar={true} />
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