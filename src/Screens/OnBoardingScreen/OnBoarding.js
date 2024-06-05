import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { COLORS } from '../../../src/Themes/Colors';

const OnBoarding = () => {
  const handlePress = () => {
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../src/Images/snip.png")} style={styles.backGround} resizeMode="cover">
      
      </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>
          <Text style={{color: 'black'}}>Let's hear a</Text>
          <Text style={{color:'purple'}}> story</Text>
            {"\n"}
             <Text style={{color:'black'}}>from you</Text>
             
          </Text>
          <Text style={styles.line}>
            <Text style={{color:"gray"}}>Share and enjoy your interesting</Text>
            {"\n"}
            <Text style={{color:"gray", marginRight: 30}}>stories with other people</Text>
            </Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Let's go</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>
            <Text style={{color:"black", fontWeight:"bold"}}>Doesn't have an account?</Text>
            <Text style={{color: COLORS.secondary}}> Create Account</Text>
            
            </Text>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    justifyContent: 'flex-end',
    //alignItems: 'center',
    //width: '100%',
    //height: '100%',
    
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
   
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20,
    backgroundColor: COLORS.primary,
    //marginTop:-20,
    borderTopStartRadius: 50,
    paddingBottom: "20%",
    overflow:"hidden",
    
    //shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 5,
// },
// shadowOpacity: 0.34,
// shadowRadius: 6.27,

// elevation: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 10,
    marginRight: 40
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 20,
   marginRight: 50,
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 270
  },
  buttonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  footer: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight:18,
    paddingHorizontal:20,
    marginTop:10,
    color: COLORS.secondary,
    
  },
  overlay:{
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  line: {
    textAlign: "left",
    marginRight: 70,
    

  }

});

export default OnBoarding;
