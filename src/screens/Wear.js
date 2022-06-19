import React from 'react'

import {ScrollView, View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
const Wear = ({navigation}) => {
 
 const women=()=>{
  navigation.navigate("image");
};
const men=()=>{
  navigation.navigate("image");
}

    return (
      <ScrollView>
       
      <Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
      <Text style={styles.description}>
      You want to buy for </Text>
       <View style={styles.mainButtons}>
<TouchableOpacity 
    style={[
      styles.buttonStyle,
      {
    backgroundColor: "green"  ,
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
    borderRadius:150
   },
    ]}
     onPress={() => women()} >
     <Image style={styles.welcomeImage}
     source={require("../../assets/woman.jpg")}/> 
    <Text tyle={styles.buttonText}>
        Women
      </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={[
      styles.buttonStyle,
      {
    backgroundColor: "green"  ,
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
    borderRadius:350,
    marginLeft:50
   },
    ]}
     onPress={() => men()} >
     <Image style={styles.welcomeImage}
     source={require("../../assets/man.jpg")}/> 
    <Text tyle={styles.buttonText}>
      Men
      </Text>
    </TouchableOpacity>
    
     </View>
     </ScrollView>
  )
}
const styles=StyleSheet.create({
   mainButtons:{
      flexDirection:"row",
      fontSize:35,
     textTransform:"capitalize",
      justifyContent:"center",
      alignItems:"center",
      padding:50,
       },
    description:{
      fontSize:20,
      color:"#7d7d7d",
      paddingBottom:20,
      alignSelf:"center",
      lineHeight:25,
      marginTop:40,
      marginBottom:20
    },
    welcomeImage:{
      width:50,
      height:50,
      marginBottom:15,
      alignSelf:"center"
      }
   });

export default Wear;