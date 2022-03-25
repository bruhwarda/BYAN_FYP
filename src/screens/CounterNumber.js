import React from "react";
import {View ,Text, StyleSheet, TouchableOpacity} from "react-native";
import { useState } from "react";
const CounterNumber = () =>{
    const[counter, setCounter]= useState(0); //initializing counter through usestate
    //counter is a state variable
return(
<View>
    <Text>{counter}</Text>
<View>
    <TouchableOpacity
     onPress={() => {
        setCounter(counter + 10); //calling setcounter to update usestate variable
        console.log(counter);
      }}>
    <Text>+10</Text>
    </TouchableOpacity >
    <TouchableOpacity
  onPress={() => {
    setCounter(0);
  }}>
    <Text>RESET</Text>
    </TouchableOpacity> 
    <TouchableOpacity
   onPress={() => {
    if (counter > 0) setCounter(counter - 10);
  }}>
    <Text>-10</Text>
    </TouchableOpacity> 
</View>
</View>
);
};
const styles=StyleSheet.create({
});
export default CounterNumber;