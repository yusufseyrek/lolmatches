
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Platform,
  Image,
  Dimensions
} from 'react-native';

var TEST_ENVIROMENT_FLAG = true;

var { width, height } = Dimensions.get("window");


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
        <Image style={styles.bgImage} source={require('../Assets/Images/bg.jpg')} />
        <View style={styles.whiteCell}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.summonerInput}
              placeholderTextColor={"#ddd"}
              onChangeText={(text)=> this.setState({summonerName : text})}
              placeholder={Strings.get("entersummoner")}
              value={this.state.summonerName}
            />
          </View>
          <ModalPicker
              data={StaticData.regions}
              selectStyle={styles.regionButton}
              initValue={Strings.get("selectregion")}
              cancelText={Strings.get("cancel")}
              selectTextStyle={styles.regionButtonText}
              onChange={(option)=>{ this.setState({summonerRegion : option.key}) }}/>
            
            
        </View>
        <View style={styles.whiteCell}>
          <TouchableHighlight onPress={()=> this.searchClick()} style={{borderRadius:5, overflow:'hidden'}}>
            <Text style={styles.textButton}>{Strings.get("searchgame")}</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.sectionTitle}>{Strings.get("recentsearch")}</Text>
        <View style={styles.whiteBorder}></View>
        
        <View style={styles.containerColumnView}>
          <View style={styles.rowView}>
            <View style={styles.columnView}>
              <Image style={styles.profileIcon} source={{uri: 'http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/912.png'}}/>
            </View>
            <View style={styles.columnView}>
              <View style={styles.rowView} >
                <Text style={styles.historyText}>{"ANIL"}</Text>
              </View>
              <View style={[styles.whiteBorder,{width:width-145}]}></View>
              <View style={styles.rowView} >
                <Text style={styles.historyText}>{"Platinum IV"}</Text>
              </View>
            </View>
            <View style={styles.columnView}>
              <Text style={styles.historyText}>{"TR"}</Text>
            </View>
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
  historyText:{
    backgroundColor:'transparent',
    color:'#fff',
    marginVertical:3,
    marginLeft:5
  },
  profileIcon:{
    width:60,
    height:60,
    marginRight:15
  },
  containerRowView:{
    justifyContent:'space-between',
    margin:20,
    flexDirection:'row',
  },
  containerColumnView:{
    flexDirection:'column',
    margin:20
  },
  rowView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  columnView:{
    flexDirection:'column'
  },
  whiteBorder:{
    width:width,
    height:1,
    backgroundColor:'#fff',
    opacity:.5
  },
  bgImage:{
    width:width,
    height:height,
    position:'absolute'
  },
  recentSearchText:{
    fontSize:17
  },
  container : {
    flex:1
  },
  sectionTitle:{
    margin:20,
    fontSize:20,
    fontWeight:'600',
    backgroundColor:'transparent',
    color:'#fff'
  },
  whiteCell:{
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
    borderWidth:1,
    borderColor:'#fff',
    padding:10,
    borderRadius:5,
    flex:1
  },
  summonerInput:{
    textAlign:'center',
    color:'#fff',
    fontSize:18,
    height: (Platform.OS === "ios") ? 25 : 45
  },
  regionButton:{
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
    padding:10
    
  },
  regionButtonText:{
    backgroundColor:'transparent',
    color:'#fff',
    fontSize:18
  },
  textButton:{
    textAlign:'center',
    fontSize:18,
    color:'#fff',
    backgroundColor:'#1266a8',
    paddingVertical:10
  }
});
