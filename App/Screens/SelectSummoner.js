
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';

var TEST_ENVIROMENT_FLAG = true;

import ModalPicker from 'react-native-modal-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions} from 'react-native-router-flux';

var Strings = require('../Components/Strings');
var StaticData = require('../Components/StaticData');
var NetworkManager = require('../Components/NetworkManager');
var UiLayer = require('../Components/UiLayer');

export default class SelectSummoner extends Component {
  constructor(props){
    super(props);
    this.state = {
      summonerName : "mr zaza",
      summonerRegion : "",
      spinnerVisiblity: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>{Strings.get("search")}</Text>
        <View style={styles.whiteCell}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.summonerInput}
              onChangeText={(text)=> this.setState({summonerName : text})}
              placeholder={Strings.get("entersummoner")}
              value={this.state.summonerName}
            />
          </View>
          <ModalPicker
            data={StaticData.regions}
            style={{marginTop:15}}
            initValue={Strings.get("selectregion")}
            cancelText={Strings.get("cancel")}
            onChange={(option)=>{ this.setState({summonerRegion : option.key}) }} />
        </View>
        <View style={[styles.whiteCell,{marginTop:5}]}>
          <TouchableOpacity onPress={()=> this.searchClick()}>
            <Text style={styles.textButton}>{Strings.get("searchgame")}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>{Strings.get("recentsearch")}</Text>
        <View style={styles.whiteCell}>
          <View style={styles.whiteCellItem}>
            <Text style={styles.recentSearchText}>TEST</Text>
          </View>
          <View style={styles.whiteCellItem}>
            <Text style={styles.recentSearchText}>TEST</Text>
          </View>
        </View>
        {UiLayer.bind(this,"")}
      </View>

    );
  }
  searchClick(){
    if(TEST_ENVIROMENT_FLAG){
        Actions.GameInfo({data : StaticData.dummy});
        return false;
    }
    var that = this;
    var {summonerName, summonerRegion} = this.state;
    if (summonerName.trim() !== "" && summonerRegion.trim() !== "") {
        
        UiLayer.isSpinnerVisible(that, true);
        NetworkManager.request("getGameInfo",{"summonerName" : summonerName, "summonerRegion": summonerRegion},function(result){
            UiLayer.isSpinnerVisible(that, false);
            console.log(JSON.stringify(result));
            if (result.err) {
                Alert.alert(Strings.get("warning"),Strings.get("gamenotfound"));
            }
            else{
                Actions.GameInfo({data : result});
            }
        })
    }
    else{
        Alert.alert(Strings.get("warning"),Strings.get("enterproperly"));
    }
  }
};

let styles = StyleSheet.create({
  recentSearchText:{
    fontSize:17
  },
  container : {
    flex:1,
    paddingTop:64,
    backgroundColor:'#ddd'
  },
  sectionTitle:{
    margin:20,
    fontSize:20,
    fontWeight:'600'
  },
  whiteCell:{
    backgroundColor:'white',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#ddd',
    padding:15
  },
  whiteCellItem:{
    borderBottomWidth:1,
    borderColor:'#ddd',
    paddingTop:15,
    paddingBottom:15,
  },
  inputContainer: {
    marginTop:20,
    backgroundColor:'white',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#ddd',
    padding:15,
    flexDirection:'column'
  },
  inputWrapper:{
    flex:1
  },
  summonerInput:{
    fontSize:18,
    height: (Platform.OS === "ios") ? 25 : 45
  },
  regionButton:{
    height:25,
    marginLeft:10,
    marginRight:10
  },
  regionButtonText:{
    fontSize:18,
    color:'blue'
  },
  textButton:{
    textAlign:'center',
    fontSize:18,
    color:'#9edae8'
  }
});
