import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const Money = ({ navigation }) => {
  const Acces = () => {
    navigation.navigate("Wear");
  };
  const Fur = () => {
    navigation.navigate("Furniture");
  };
  return (
    <View>
      <Text style={styles.description}>
        You can reach us anytime via @gmail.com
      </Text>
      <View style={styles.mainButtons}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "green",
              paddingHorizontal: 40,
              paddingVertical: 15,
              fontSize: 35,
              borderRadius: 150,
              color:"black"
            },
          ]}
          onPress={() => Acces()}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../../assets/woman.jpg")}
          />
          <Text style={styles.buttonText}>Accsessories</Text>
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
          onPress={() => Fur()}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../../assets/bed.jpg")}
          />
          <Text style={styles.buttonText}>Furniture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainButtons: {
    flex:1,
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
  buttonText: {
    fontSize: 12,
    textAlign: "center",
    color:"black",
  },
  buttonStyle:{
    width:150,
    height:100
  }
});
export default Money;
