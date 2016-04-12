
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
        console.log(action);
        return defaultReducer(state, action);
    }
};

export default class lolnexus extends Component {
  render() {
    return <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#000'}}>
            <Scene key="modal" component={Modal} >
                <Scene key="root">
                    <Scene key="SelectSummoner" component={SelectSummoner}  title={Strings.get("selectsummoner")} initial={true}/>
                    <Scene key="GameInfo" component={GameInfo} title={Strings.get("gameinfo")}/>
                    <Scene direction="vertical" component={SummonerDetail} key="SummonerDetail" title="Test" hideNavBar={true} />
                </Scene>
            </Scene>
        </Router>
  }
};