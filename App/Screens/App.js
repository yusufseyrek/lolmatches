
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

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

export default class lolnexus extends Component {
  render() {
    return <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#000'}}>
            <Scene key="modal" component={Modal} >
                <Scene key="root">
                    <Scene key="SelectSummoner" component={SelectSummoner}  title={Strings.get("selectsummoner")} initial={true}/>
                    <Scene key="GameInfo" component={GameInfo} title={Strings.get("gameinfo")}/>
                    
                    <Scene key="SummonerDetailTab" tabs={true} direction="vertical">
                        <Scene component={SummonerDetail} icon={TabIcon} key="SummonerDetail" title={Strings.get("summonerdetails")} hideNavBar={true} />
                        <Scene component={SummonerDetail} icon={TabIcon} key="SummonerDetail1" title={Strings.get("matchhistory")} hideNavBar={true} />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
  }
};