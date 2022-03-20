import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Info = ({ navigation, route }) => {
  const { productName, ngo, description } = route.params;
  return (
    <View>
      <Text>Product Name: {productName}</Text>
      <Text>NGO: {ngo}</Text>
      <Text>Description:{description}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
