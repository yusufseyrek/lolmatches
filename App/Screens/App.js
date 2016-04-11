
console.disableYellowBox = true; 

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Strings from '../Components/Strings';
import SelectSummoner from './SelectSummoner';
import GameInfo from './GameInfo';
import SummonerDetail from './SummonerDetail';

import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        return defaultReducer(state, action);
    }
};


export default class lolnexus extends Component {
  render() {
    return <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#000'}}>
            <Scene key="root">
                <Scene key="SelectSummoner" component={SelectSummoner}  title={Strings.get("selectsummoner")}/>
                <Scene key="GameInfo" component={GameInfo} title={Strings.get("gameinfo")}/>
            </Scene>
            <Scene key="modal" component={Modal}>
                <SummonerDetail key="SummonerDetail"/>
            </Scene>
        </Router>
  }
};
