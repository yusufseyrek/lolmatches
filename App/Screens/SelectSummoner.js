
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

const TEST_ENVIROMENT_FLAG = false;

let { width, height } = Dimensions.get("window");

import ModalPicker from 'react-native-modal-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions} from 'react-native-router-flux';

var Strings = require('../Components/Strings');
var StaticData = require('../Components/StaticData');
var NetworkManager = require('../Components/NetworkManager');
var UiLayer = require('../Components/UiLayer');
var Utils = require('../Components/Utils');

export default class SelectSummoner extends Component {
  constructor(props){
    super(props);
    this.state = {
      summonerName : "",
      summonerRegion : "",
      spinnerVisiblity: false,
      summonerHistory : []
    };
  }
  componentWillMount(){
    Utils.getSummonersFromHistory().then((summonerList)=>{
      if(summonerList){
        this.setState({summonerHistory : summonerList});
      }
    });
  }
  render() {
    let { summonerHistory, summonerName, summonerRegion } = this.state;
    
    let historyViews = summonerHistory.map(function(item, index) {
		return (
			<TouchableOpacity style={{marginBottom:10}} onPress={()=>this.searchClick(item.summonerName,item.region)} key={"history-"+index}>
				<View style={styles.rowView}>
					<View style={styles.columnView}>
						<Image style={styles.profileIcon} source={{uri: item.profileIconImage}}/>
					</View>
					<View style={styles.columnView}>
						<View style={styles.rowView}>
							<Text style={styles.historyText}>{item.summonerName}</Text>
						</View>
					<View style={[styles.whiteBorder,{width:width-145}]}></View>
						<View style={styles.rowView} >
							<Text style={styles.historyText}>{item.rankString}</Text>
						</View>
					</View>
					<View style={styles.columnView}>
						<Text style={styles.historyText}>{item.region.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
    }.bind(this));
    
    
    return (
      <View style={styles.container}>

        <Image style={styles.bgImage} source={require('../Assets/Images/bg.jpg')} />
        <View style={styles.rowView}>
          <Image style={styles.logoImage} source={require('../Assets/Images/lol-logo.png')}/>
        </View>

        <View style={styles.whiteCell}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.summonerInput}
              placeholderTextColor={"#ddd"}
              onChangeText={(text)=> this.setState({summonerName : text})}
              placeholder={Strings.get("entersummoner")}
              value={summonerName}
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
          <TouchableHighlight onPress={()=> this.searchClick(summonerName, summonerRegion)} style={{borderRadius:5, overflow:'hidden'}}>
            <Text style={styles.textButton}>{Strings.get("searchgame")}</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.sectionTitle}>{Strings.get("recentsearch")}</Text>
        <View style={styles.whiteBorder}></View>
        
        <View style={styles.containerColumnView}>
          {historyViews}
        </View>
        {UiLayer.bind(this,"")}
      </View>

    );
  }
  searchClick(summonerName, summonerRegion){
    if(TEST_ENVIROMENT_FLAG){
        Actions.GameInfo({data : StaticData.dummy});
        return false;
    }
    var that = this;
    if (summonerName.trim() !== "" && summonerRegion.trim() !== "") {
	 	
        UiLayer.isSpinnerVisible(that, true);
        NetworkManager.request("getGameInfo",{"summonerName" : summonerName, "summonerRegion": summonerRegion},function(result){
            UiLayer.isSpinnerVisible(that, false);
            if (result.err || result.error) {
                Alert.alert(Strings.get("warning"),Strings.get("gamenotfound"));
            }
            else{
                Utils.addSummonerToHistory(result,(newList)=>{
                  that.setState({summonerHistory : newList});
                  Actions.GameInfo({data : result});
                });
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
    opacity:.3
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
  },
  logoImage:{
	  width:200,
	  height:75,
	  resizeMode:'contain',
	  marginTop:20
  }
});
