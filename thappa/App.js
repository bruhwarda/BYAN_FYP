{/*import CustomComponent from "./src/screens/CustomComponent";
import Problems from "./src/screens/Problems";
import Api from "./src/screens/Api";
import Practice from "./src/screens/Practice";
import Butn from "./src/screens/Butn";
import NfCarddet from"./src/components/NetflixCard";
import Box from "./src/screens/Box";
import Counter from "./src/screens/Counter";
import HookEffect from "./src/screens/HookEffect";*/}
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import ContactYoutube from "./src/screens/ContactYoutube";
import HomeScreen from "./src/screens/HomeScreen";
import FirstPage from "./src/screens/FirstPage";
import Buy from "./src/screens/Buy";
import Sell from "./src/screens/Sell";
import Wear from "./src/screens/Wear";
import Money from "./src/screens/money";
import Furniture from "./src/screens/Furniture";
import Cart from "./src/screens/Cart";
import BuyItem from "./src/screens/BuyItem";
import Men from "./src/screens/Men";
import MenHome from "./src/screens/MenHome";
import DrawerNavigator from "./src/screens/DrawerNavigator";
import DrawerNavigatorWoman from "./src/screens/DrawerNavigatorWoman";
import Bedroom from "./src/screens/Bedroom";
import Others from "./src/screens/Others";
import Onboarding from "./src/screens/Onboarding";
import Charity from "./src/screens/charity";
import Info from "./src/screens/info";
import ChooseNgo from "./src/screens/chooseNgo";
import Upload from "./src/screens/upload";
import Wear1 from "./src/screens/Wear1";
import Furniture1 from "./src/screens/Furniture1";
const App = () => {
 const Stack = createNativeStackNavigator();
 const navOptionHandler=()=>({
   headerShown:false
 })
 return (
   
<NavigationContainer>
   <Stack.Navigator initialRouteName="Welcome">
    
   <Stack.Screen 
 name="Welcome" component={Onboarding}/>
 <Stack.Screen 
 name="SignUp" component={FirstPage}/>
  <Stack.Screen 
name="Login" component={ContactYoutube}/>
<Stack.Screen 
name="Home" component={HomeScreen}/>
<Stack.Screen 
name="charity" component={Charity}/>
<Stack.Screen 
name="Wear" component={Wear}/>
<Stack.Screen 
name="Furniture" component={Furniture}/>
<Stack.Screen 
name="Choose" component={ChooseNgo}/>
<Stack.Screen 
name="info" component={Info}/>
<Stack.Screen 
name="cash" component={Money}/>
<Stack.Screen 
name="image" component={Upload}/>
<Stack.Screen 
name="Buy" component={Buy}/>
<Stack.Screen 
name="Sell" component={Sell}/>
<Stack.Screen 
name="Wear1" component={Wear1}/>
<Stack.Screen 
name="Furniture1" component={Furniture1}/>
<Stack.Screen 
name="Others" component={Others}/>
<Stack.Screen 
name="Bedroom" component={Bedroom}/>




{/*<Stack.Screen 
name="MenHome" component={DrawerNavigator} options={navOptionHandler}/>
<Stack.Screen 
 name="WomenHome" component={DrawerNavigatorWoman} options={navOptionHandler}/>*/}
<Stack.Screen 
name="Cart" component={Cart}/>
<Stack.Screen 
 name="BuyItem" component={BuyItem}/> 

</Stack.Navigator>

 </NavigationContainer>
 
   );
};
  export default App;
