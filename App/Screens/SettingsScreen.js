
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

var Strings = require('../Components/Strings');

var { width, height } = Dimensions.get("window");

import {Actions} from 'react-native-router-flux';

export default class SettingsScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentLanguage : "tr"
        }
    }
    
    render(){
        var bgColor = Strings.lang==="tr" ? '#1266a8' : 'transparent';
        return(
            <View>
                <Image style={styles.bgImage} source={require('../Assets/Images/bg.jpg')} />
               
                <View style={styles.containerView}>
                    <Text style={[styles.sectionTitle, {marginTop:50}]}>{Strings.get("selectlanguage")}</Text>
                </View>
                
                <View style={[styles.whiteBorder,{width:width-40,marginLeft:20}]}></View>
                
                <TouchableOpacity onPress={()=>{
                    Strings.setCurrentLanguage("tr");
                    Actions.SelectSummoner()}
                }>
                
                <View style={[styles.rowView,{backgroundColor:bgColor}]}>
                    <View style={styles.columnView}> 
                        <Text style={styles.textView}>{Strings.get("turkish")}</Text>
                    </View>
                    <View style={styles.columnView}>  
                        <Image style={styles.flagImage} source={require('../Assets/Images/turkishflag.png')} />
                    </View>
                </View>
                </TouchableOpacity>

                    
               <View style={[styles.whiteBorder,{width:width-40,marginLeft:20}]}></View>
                <TouchableOpacity onPress={()=>{
                    Strings.setCurrentLanguage("en");
                    Actions.SelectSummoner()}
                }>
               <View style={[styles.rowView,{backgroundColor:bgColor}]}>
                    <View style={styles.columnView}> 
                        <Text style={styles.textView}>{Strings.get("english")}</Text>
                    </View>
                    <View style={styles.columnView}>  
                        <Image style={styles.flagImage} source={require('../Assets/Images/britishflag.png')} />
                    </View>
                </View>
                </TouchableOpacity>
                    
                <View style={[styles.whiteBorder,{width:width-40,marginLeft:20}]}></View>
               
                <View style={styles.columnView}>
                    <Image style={styles.logoImage} source={require('../Assets/Images/lol-logo.png')}/>
                </View>
                
                <View style={styles.columnView}>
                    
                </View>
              
                
                <TouchableOpacity style={styles.closeButton} onPress={()=>{
                    Strings.setCurrentLanguage("en");
                    Actions.SelectSummoner()}
                }>
                    <Image style={styles.closeButtonImage} source={require('../Assets/Images/close.png')}/>
                </TouchableOpacity>
            </View> 
            
        )
    }
}

    let styles = StyleSheet.create({
        
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
         whiteBorder:{
            width:width,
            height:1,
            marginTop:3,
            backgroundColor:'#fff',
            opacity:.3
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
            width:width - 40,
            marginLeft:20
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