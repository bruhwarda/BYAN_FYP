import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity, ImageBackground } from 'react-native';
const WelcomePage = ({navigation}) => {
    const start=()=>{
        navigation.navigate("SignUp");
      };
  return (
    <View style={styles.container}>
    <ImageBackground  style={{flex: 1}}
    source={require("../../assets/buan.jpg")}> 
    <TouchableOpacity 
    style={[
      styles.buttonStyle,
      {
    backgroundColor: "#4342",
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
    borderRadius:350,
   alignSelf:"center",
   alignItems:"center",
   display:"flex",
   justifyContent:'flex-end',
    width:200,
    marginTop:'30%'
   }
    ]}
     onPress={() => start()}>
     <Text tyle={styles.buttonText}>
      Get Started
      </Text>
    </TouchableOpacity>
    </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
  },


});

export default WelcomePage;  