import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import {COLORS} from "../../../src/Themes/Colors";
//import { TextInput } from 'react-native-gesture-handler';

export default function Login() {
  return (
   <View style={styles.container}>
    <ImageBackground source={require("../../../src/Images/login.png")} style={styles.ImageBackground} >
     
    </ImageBackground>
       <View style={styles.content}> 
       <Text style={styles.subtitle}> Please Sign In To Continue</Text>
       <View>
        {/* <TextInput style={styles.input}>
            <Text></Text>
            <Text></Text>
        </TextInput> */}
       </View>

       </View>
   </View>
  )

  

  
}

const styles=StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    ImageBackground:{
        flex:1,
        justifyContent:"flex-end",
        width: "100%",
        height: 200,
        alignItems: "center",
        
    },
    content: {
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal: 20,
        backgroundColor:COLORS.primary
    },
    
     subtitle: {
        color: "graY", 
        fontSize: 15,
        fontWeight: "bold", 
        marginBottom: 400, 
        marginRight: 100
     },

     input:{
        backgroundColor: COLORS.secondary,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        
        alignItems: 'center',
        
     }


    
})