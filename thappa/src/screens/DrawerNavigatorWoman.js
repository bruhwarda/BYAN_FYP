import React from 'react';
import WomenHome from './WomenHome';
import Wear from './Wear';
import Women from './Women';
import MenHome from './MenHome';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const DrawerNavigatorWoman = () => {
    
  return (
    <Drawer.Navigator initialRouteName="WomenHome">
       

 
    <Drawer.Screen name=" Home" component={WomenHome} />
  
    <Drawer.Screen name="Clothes" component={Women} />

    
    </Drawer.Navigator>
  )
}

export default DrawerNavigatorWoman;