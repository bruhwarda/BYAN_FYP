import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Buttons</Text>
      <Button
        title=" JOIN NOW"
        onPress={() => {
          Alert.alert("subscribe");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("subscribe");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../assets/jac2.jpg")}
        />
        <Text> Join Now </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});
<NavigationContainer>
  <Stack.Navigator initialRouteName="loginpage">
    <Stack.Screen name="loginpage" component={Login} />
    <Stack.Screen name="color" component={ColorGenerator} />
  </Stack.Navigator>
</NavigationContainer>;
export default OurButton;
