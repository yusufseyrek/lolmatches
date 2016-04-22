
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var LanguageInterface = require('../Components/LanguageInterface');

var { width, height } = Dimensions.get("window");

import {Actions} from 'react-native-router-flux';

export default class SettingsScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        //TODO Hot reload language
        var languageViews = LanguageInterface.languageList.map((languageItem, index)=>{
            var bgColor = (languageItem.langSlug == LanguageInterface.langSlug) ? "#1266a8" : "transparent";
            return(
                <TouchableOpacity key={`lang-${index}`} style={styles.languageButton} onPress={()=>{
                    LanguageInterface.setCurrentLanguage(languageItem.langSlug);
                    Actions.SelectSummoner()}}>
                    <View style={[styles.rowView,{backgroundColor:bgColor}]}>
                        <View style={styles.columnView}> 
                            <Text style={styles.textView}>{LanguageInterface.get(languageItem.langKey)}</Text>
                        </View>
                        <View style={styles.columnView}>  
                            <Image style={styles.flagImage} source={languageItem.image} />
                        </View>
                    </View>
                </TouchableOpacity>
            );
        });
        return(
            <View>
                <Image style={styles.bgImage} source={require('../Assets/Images/bg.jpg')} />
                
                <View style={styles.containerView}>
                    <Text style={[styles.sectionTitle, {marginTop:50}]}>{LanguageInterface.get("selectlanguage")}</Text>
                </View>
                <View style={styles.whiteBorder}></View>
                
                {languageViews}
                
                <View style={styles.columnView}>
                    <Image style={styles.logoImage} source={require('../Assets/Images/lol-logo.png')}/>
                </View>
                <View style={styles.columnView}>
                    
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={()=>{
                    Actions.SelectSummoner()}}>
                    <Image style={styles.closeButtonImage} source={require('../Assets/Images/close.png')}/>
                </TouchableOpacity>
            </View> 
            
        )
    }
}

let styles = StyleSheet.create({
whiteBorder:{
    width:width,
    height:1,
    backgroundColor:'#fff',
    opacity:.3,
    marginBottom:15
},
bgImage:{
    width:width,
    height:height,
    position:'absolute'
},
closeButton:{
    position:'absolute',
    top:20,
    right:15
},
closeButtonImage:{
    width:35,
    height:35
},
containerView:{
    flexDirection:'row',
    marginLeft:15,marginRight:15,
    marginTop:10,
    
},
languageButton:{
    borderBottomWidth:1,
    borderColor:'white',
    marginHorizontal:20
},
sectionTitle:{
    marginHorizontal:10,
    marginVertical:10,
    fontSize:22,
    fontWeight:'600',
    backgroundColor:'transparent',
    color:'#fff'
},
textView:{
    backgroundColor:'transparent',
    color:'#fff' ,
    fontSize:18,
    marginVertical:8,
    marginHorizontal:25
},
rowView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
},
columnView:{
    flexDirection:'column',
    alignItems:'center'
},
flagImage:{
    width: 60,
    height:40,
    marginHorizontal:25,
    marginVertical:8,
},
logoImage:{
    width:200,
    height:75,
    marginVertical:20
}

})