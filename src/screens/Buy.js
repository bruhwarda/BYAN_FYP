import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
const Buy = ({navigation}) => {
  
 const wear=()=>{
  navigation.navigate("Wear1");
};
const furniture=()=>{
  navigation.navigate("Furniture1");
}
    return (
      <View>
      <Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
      <Text style={styles.description}>
      You want to buy </Text>
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
     onPress={() => wear()} >
     <Image style={styles.welcomeImage}
     source={require("../../assets/woman.jpg")}/> 
    <Text tyle={styles.buttonText}>
        Accsessories
      </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={[
      styles.buttonStyle,
      {
    backgroundColor: "green",
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
    borderRadius:350,
    marginLeft:50
   },
    ]}
     onPress={() => furniture()} >
     <Image style={styles.welcomeImage}
     source={require("../../assets/bed.jpg")}/> 
    <Text tyle={styles.buttonText}>
      Furniture
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
      marginTop:50,
      marginBottom:20
    },
    welcomeImage:{
      width:50,
      height:50,
      marginBottom:15,
      alignSelf:"center"
     
  }
   
});
export default Buy;