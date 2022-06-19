import React from "react";
import {View, Text,StyleSheet} from "react-native";
const Box = () =>{
  return (
    <View style={styles.boxParent}>
         <View style={styles.subParent}>
  <Text style={[styles.boxFirst,styles.common]}>
    hello1
  </Text>
  </View>
  <Text style={[styles.boxSecond,styles.common]}>
    hello2
  </Text>
  <Text style={[styles.boxThird,styles.common]}>
  
    hello3
  </Text>
  <Text style={[styles.boxFourth,styles.common]}>
    hello4
  </Text>
  <Text style={[styles.boxFifth,styles.common]}>
    hello5
  </Text>
  </View>
)};
const styles=StyleSheet.create({
boxParent:{
  marginTop:100,
  width:"95%",
  borderWidth:3,
  borderColor:"#101820FF",
  marginHorizontal:10,
  height:400,
  position:"relative",
 //flexDirection:"row",// by default column
 // alignItems:"center",  //vertically
 //justifyContent:"space-around" //horizontally
},
boxFirst:{
   //alignSelf:"center",
    backgroundColor:"#97BC62FF",
    borderColor:"#2C5F2D",
    },
    boxSecond:{
      
        backgroundColor:"#D4B996FF",
        borderColor:"#A07855FF",
        //flex:1
        right:0,
        },
        boxThird:{
            backgroundColor:"#97BC62FF",
            borderColor:"#2C5F2D",
           // alignSelf:"flex-end",
           bottom:0,
           right:0,
            },
            boxFourth:{
                backgroundColor:"#D4B996FF",
                borderColor:"#A07855FF",
                //flex:1
                bottom:0,
                left:0,
                },
                boxFifth:{
                    backgroundColor:"#97BC62FF",
                    borderColor:"#2C5F2D",
                   // alignSelf:"flex-end",
                    
                    },
            common:{
               position:"absolute",
                fontSize:20,
              
             
                 borderWidth:1,
              width:60,
              height:40 

             },
             subParent:{
justifyContent:"center",
alignItems:"center",
width:"100%",
height:"100%"
             }

})
export default Box;