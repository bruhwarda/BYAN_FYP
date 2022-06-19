import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
//import Checkbox from 'expo-checkbox';

const Option = ({ navigation }) => {
  const Submit = () => {
    navigation.navigate("color");
  };
  //const[Agree,setAgree]= useState(false);
  return (
    <View>
      <Text style={styles.textStyle}>CHARITY THROUGH</Text>
      <View>
        <TouchableOpacity onPress={() => Submit()}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/clothes.jpg")}
          />
          <Text style={styles.textStyle1}> PRODUCT </Text>
        </TouchableOpacity>
        <Text> OR </Text>
        <TouchableOpacity onPress={() => Submit()}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/money.jpg")}
          />
          <Text style={styles.textStyle1}> MONEY </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
  },
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 25,
    color: black,
  },
  textStyle1: {
    textAlign: "center",
    fontSize: 10,
    color: black,
  },
});
export default Option;
