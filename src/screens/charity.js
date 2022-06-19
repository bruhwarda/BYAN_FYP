import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const Charity = ({ navigation }) => {
  const Product = () => {
    navigation.navigate("Choose");
  };
  const Cash = () => {
    navigation.navigate("cash");
  };
  return (
    <View>
      <Text style={styles.description}>
        You can reach us anytime via @gmail.com
      </Text>
      <Text style={styles.description}>CHARITY THROUGH </Text>
      <View style={styles.mainButtons}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "green",
              paddingHorizontal: 50,
              paddingVertical: 15,
              fontSize: 35,
              borderRadius: 150,
            },
          ]}
          onPress={() => Product()}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../../assets/product.jpg")}
          />
          <Text style={styles.buttonText}>PRODUCT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "green",
              paddingHorizontal: 50,
              paddingVertical: 15,
              fontSize: 35,
              borderRadius: 350,
              marginLeft: 50,
            },
          ]}
          onPress={() => Cash()}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../../assets/money.jpg")}
          />
          <Text style={styles.buttonText}>MONEY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainButtons: {
    flexDirection: "row",
    fontSize: 35,
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    alignSelf: "center",
    fontWeight: "700",
    lineHeight: 25,
    marginTop: 50,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 50,
    height: 50,
    marginBottom: 15,
    alignSelf: "center",
  },
});
export default Charity;
