//import CustomComponent from "./src/screens/CustomComponent";
//import Problems from "./src/screens/Problems";
//import Api from "./src/screens/Api";
//import Practice from "./src/screens/Practice";
//import Butn from "./src/screens/Butn";
//import NfCarddet from"./src/components/NetflixCard";
//import Box from "./src/screens/Box";
//import Counter from "./src/screens/Counter";
//import HookEffect from "./src/screens/HookEffect";
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from "./src/screens/WelcomePage";
 import ContactYoutube from "./src/screens/ContactYoutube";
import HomeScreen from "./src/screens/HomeScreen";
import FirstPage from "./src/screens/FirstPage";
import Buy from "./src/screens/Buy";
import Sell from "./src/screens/Sell";
import Wear from "./src/screens/Wear";
import Furniture from "./src/screens/Furniture";
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
<Stack.Screen 
name="Buy" component={Buy}/>
<Stack.Screen 
name="Sell" component={Sell}/>
<Stack.Screen 
name="Wear" component={Wear}/>
<Stack.Screen 
name="Furniture" component={Furniture}/>
 </Stack.Navigator>
   </NavigationContainer>
   </View>
   );
};
  export default App;
