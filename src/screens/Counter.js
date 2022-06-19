import React,{useState} from "react";
import { Text,StyleSheet,View,TouchableOpacity} from "react-native";
const Counter = () =>{
    const[counter,setCounter]=useState(0);
    
  return (
<View>
   <Text style={styles.counter}>{counter}</Text> 
   <View style={styles.button_group}>
    <TouchableOpacity
    style={[styles.commonBtn, styles.add]}
   onPress={() => {
    setCounter(counter+10);
   }}>
  <Text style={styles.commonText}>
  +10
  </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.commonBtn, styles.reset]}
    onPress={() => {
        setCounter(0);
    }}>
  <Text style={styles.commonText}>
  reset
  </Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.commonBtn, styles.sub]}
    onPress={() => {
       if(counter>0) setCounter(counter-10);
    }} >
  <Text style={styles.commonText}>
  -10
  </Text>
  </TouchableOpacity>
  </View>
  </View>
  
)};
const styles=StyleSheet.create({

button_group:{
width:"100%",
display:"flex",
alignItems:"center"
},
counter:{
    fontSize:60,
    textAlign:"center",
    width:"100%",
    padding:20,
    marginTop:60,
    marginBottom:30
},
commonBtn:{
    backgroundColor:"black",
    marginBottom:30
   
},
commonText:{
    color:"white",
    fontSize:30,
    paddingHorizontal:70,
    
}

})
export default Counter;
