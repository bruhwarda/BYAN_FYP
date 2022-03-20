import React from 'react';
import Men from './Men';
import MenHome from './MenHome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
   
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={MenHome} />
    
    <Drawer.Screen name="Clothes" component={Men} />
    
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;