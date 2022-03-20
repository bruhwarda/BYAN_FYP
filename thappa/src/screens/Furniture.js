import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
const Furniture = ({navigation}) => {
  
  
  const others=()=>{
    navigation.navigate("image");
  }
  const bedroom=()=>{
    navigation.navigate("image");
  }
  
    return (
      <View>
      
      <Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
      <Text style={styles.description}>
      You want to buy Furniture for </Text>
       <View style={styles.mainButtons}>
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
     onPress={() => others()} >
     <Image style={styles.welcomeImage}
     source={require("../../assets/bed.jpg")}/> 
    <Text tyle={styles.buttonText}>
      others
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
     onPress={() => bedroom()} >
     <Image style={styles.welcomeImage}
     source={require("../../assets/sofa.jpg")}/> 
    <Text tyle={styles.buttonText}>
 bedroom
      </Text>
    </TouchableOpacity>
    
     </View>
     </View>
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

export default Furniture;