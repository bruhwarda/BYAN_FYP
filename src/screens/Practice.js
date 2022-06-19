
import React from 'react';
import {View} from 'react-native';
import Carddet from"../components/Carddet";
const Practice = () =>{
    return(
    <View>
 <Carddet 
 textData="first image"
 imgSrc={require("../../assets/shirt.jpg")}/>
 <Carddet 
 textData="2nd image"
 imgSrc={require("../../assets/khaddi.jpg")}/>
   <Carddet 
   textData="3rd image"
   imgSrc={require("../../assets/shirt.jpg")}/>
    </View>
    );
};


export default Practice;
