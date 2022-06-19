import React from "react";
import {View,Text,StyleSheet} from "react-native";
const FirstChallenge = () =>{
    const myName="warda";
return(
<View>
    <Text style={styles.textOne}>Welcome to THAPA TECHNICAL challenge</Text>
    <Text style={styles.textTwo}>
        I love react native
    </Text>
    <Text>Hi my name is {myName}</Text>
</View>
);
};
const styles=StyleSheet.create({
    textOne:{
        fontSize:40,
        color:"red",
        fontWeight:"bold",
    },
    textTwo:{
        fontSize:30,
    },
});
export default FirstChallenge;