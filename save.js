import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import ContactYoutube from "./src/screens/ContactYoutube";
import HomeScreen from "./src/screens/HomeScreen";
import FirstPage from "./src/screens/FirstPage";
const App = () => {
 const Stack = createNativeStackNavigator();
 return (
   <View>
<NavigationContainer>
   <Stack.Navigator initialRouteName="SignUp">
 <Stack.Screen 
 name="SignUp" component={FirstPage}/>
  <Stack.Screen 
name="Login" component={ContactYoutube}/>
<Stack.Screen 
name="Home" component={HomeScreen}/>


    </Stack.Navigator>
    
    
  </NavigationContainer>
   </View>
  
  
  );
};