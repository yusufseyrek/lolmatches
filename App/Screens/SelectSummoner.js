
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import ModalPicker from 'react-native-modal-picker';
import Spinner from 'react-native-loading-spinner-overlay';

import Strings from '../Components/Strings';
import StaticData from '../Components/StaticData';
import NetworkManager from '../Components/NetworkManager';
import UiLayer from '../Components/UiLayer';

export default class SelectSummoner extends Component {
  constructor(props){
    super(props);
    this.state = {
      summonerName : "",
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
    var that = this;
    var {summonerName, summonerRegion} = this.state;
    if (summonerName.trim() !== "" && summonerRegion.trim() !== "") {
      UiLayer.isSpinnerVisible(that, true);
      NetworkManager.request("getGameInfo",{"summonerName" : summonerName, "summonerRegion": summonerRegion},function(result){
        UiLayer.isSpinnerVisible(that, false);
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
    paddingTop:64
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
    padding:15,
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
    height:25,
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
