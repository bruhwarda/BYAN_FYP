import React from 'react'
import { StyleSheet,ImageBackground } from 'react-native';
const WomenHome = () => {
  return (
    <ImageBackground  style={{flex: 1}}
    source={require("../../assets/woman.jpg")}> 
    </ImageBackground>
    
  )
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
    },
  
  
  });


export default WomenHome;