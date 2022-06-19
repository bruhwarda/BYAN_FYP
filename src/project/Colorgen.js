import React from "react";
import { Text,StyleSheet} from "react-native";
const Colorgen = () =>{
  return (
    
  <Text style={styles.textStyle}>
    hello this is from CustomComponent.
  </Text>
  
)};
const styles=StyleSheet.create({
textStyle:{
  color:"black",
  marginTop:20,
},
})
export default Colorgen;