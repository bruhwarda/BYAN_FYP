import React from 'react';
import { Text, View,StyleSheet } from "react-native";
const Problems = () => {
    const getFullName = (firstName ,secondName, thirdName) =>{
        return ( 
          <View>
          {firstName}  {secondName}  {thirdName}
          </View>
          );
        };
     const name="alina";
     const myElement=<Text style={styles.element}>element</Text>;
  return (
<View>
<Text style={styles.welcome}>
        welcome to thappa channel.
    </Text>
    <Text>
        my name is {name}
    </Text>
    {myElement}
    <Text>
  function works {getFullName(" alina","mohsin","awan")}
</Text>
</View>
  );
};
const styles=StyleSheet.create({
    welcome:{
        color:"red",
     
    },
});
export default Problems;