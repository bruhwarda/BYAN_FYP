import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const HomeScreen = ({route,navigation}) => {
 const {myName}=route.params;
 const buy=()=>{
  navigation.navigate("Buy");
       };
  const sell=()=>{
  navigation.navigate("charity");
          };
    return (
      <ScrollView>
    <View style={styles.mainContainer}>
    <View style={{flexDirection:"row",alignSelf:"center"}}>
    <MaterialCommunityIcons name="charity" size={24} color="black"  /><Text style={styles.txt}>BUAN</Text>
  </View>
    <Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
      <Text style={styles.mainHeader}>
          Welcome {myName}</Text>
         </View>
    <View>
    <Text style={styles.description}>
    You want to </Text>
    </View>
    <View style={styles.mainButtons}>
    <TouchableOpacity 
    style={[
      styles.buttonStyle,
      {
    backgroundColor:"green"  ,
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
  },
    ]}
      onPress={() => buy()} >
    <Text tyle={styles.buttonText}>
        Buy
      </Text>
    </TouchableOpacity>
    <Text style={[
      styles.buttonStyle,
      {
        fontSize:20,
        color:"#7d7d7d",
       lineHeight:25,
    },
    ]} >
    or
  </Text>
    <TouchableOpacity 
    style={[
      styles.buttonStyle,
      {
    backgroundColor: "green"  ,
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
   },
    ]}
     
   onPress={() => sell()} >
    <Text tyle={styles.buttonText}>
        Sell
      </Text>
    </TouchableOpacity>
     </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    mainContainer:{
      width:"100%",
      height:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
     
    },
    mainHeader:{
        fontSize:35,
        color:"#4c5dab",
        marginTop:0,
        textTransform:"capitalize"
    },
    mainButtons:{
      flexDirection:"row",
      fontSize:35,
     textTransform:"capitalize",
      justifyContent:"space-around",
      alignItems:"center",
      padding:50,
    },
   
    description:{
      fontSize:20,
      color:"#7d7d7d",
      paddingBottom:20,
      alignSelf:"center",
      lineHeight:25,
    },
    txt:{
      fontSize:27,
      marginBottom:5,
      lineHeight:25,
      
    },
});
export default HomeScreen;