import React,{useState} from "react";
import { Text,StyleSheet,View, TextInput,TouchableOpacity, Alert,ScrollView} from "react-native";
import { Avatar, Button, Card, Title, Paragraph,Image } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const BuyItem= ({navigation}) =>{
const[userName,setUserName]=useState("");
const[userNumber,setUserNumber]=useState("");
const[userCity,setUserCity]=useState("");
const[userAddress,setUserAddress]=useState("");
  const submit=()=>{
  if(userName !=" " && userNumber !=" "  && userAddress !=" "  && userCity !=" "){
    Alert.alert(`thanks ${userName} for shopping`);
  navigation.navigate("Buy");
      }
  };
  return (
    <ScrollView>
<View style={styles.mainContainer}>
<View style={{flexDirection:"row",alignSelf:"center"}}>
<MaterialCommunityIcons name="charity" size={24} color="black"  /><Text style={styles.txt}>BUAN</Text>
</View>
<Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
<Text style={styles.txt}>Your Order</Text>
<Card style={{ 
    
  alignSelf:"center",
 
 
  width:"50%"
  
}}>

<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
<Card.Actions>
   </Card.Actions>
   
   <View  style={{flexDirection:"row"}}>
   <Text style={styles.text}>Price:</Text><Text style={styles.text}>150</Text>
   </View>
   <View  style={{flexDirection:"row"}}>
   <Text style={styles.text}>Quantity:</Text><Text style={styles.text}>x1</Text>
   </View>
</Card>
<Text style={styles.txt}>Enter your Information</Text>
  <View style={styles.inputContainer}>
<Text style={styles.label}>Enter your name</Text>
  <TextInput  style={styles.inputStyle}
autoCapitalize="none" 
autoCorrect={false}
value={userName}
onChangeText={(actualData)=>setUserName(actualData)}
/>
</View>
<View style={styles.inputContainer}>
<Text style={styles.label}>Enter your Number</Text>
 <TextInput  style={styles.inputStyle}
autoCapitalize="none"  
autoCorrect={false}
SecureTextEntry={true}
value={userNumber}
onChangeText={(actualData)=>setUserNumber(actualData)}
/>
</View >
<View style={styles.inputContainer}>
<Text style={styles.label}>Enter your Address</Text>
 <TextInput  style={styles.inputStyle}
autoCapitalize="none"  
autoCorrect={false}
SecureTextEntry={true}
value={userAddress}
onChangeText={(actualData)=>setUserAddress(actualData)}
/>
</View >
<View style={styles.inputContainer}>
<Text style={styles.label}>Enter your City</Text>
 <TextInput  style={styles.inputStyle}
autoCapitalize="none"  
autoCorrect={false}
SecureTextEntry={true}
value={userCity}
onChangeText={(actualData)=>setUserCity(actualData)}
/>
</View >

<TouchableOpacity style={{backgroundColor:"green",padding:10,borderRadius:15,marginBottom:2}}
onPress={() => submit()} >
<Text tyle={styles.buttonText}>
    Confirm Order
  </Text>
</TouchableOpacity>
</View>
</ScrollView>
);
};
const styles=StyleSheet.create({
mainContainer:{
  height:"100%",
  paddingHorizontal:30,
  paddingTop:30,
  backgroundColor:"#fff"
},
mainHeader:{
    fontSize:25,
    color:"#344055",
    fontWeight:"500",
    paddingTop:20,
    paddingBottom:15,
    textTransform:"capitalize",
   
    },
    description:{
fontSize:20,
color:"#7d7d7d",
paddingBottom:20,
lineHeight:25,

    },
    inputContainer:{
        marginTop:20,
    },
    labels:{
     fontSize:18,
     color:"#7d7d7d",
     marginTop:10,
     marginBottom:5,
     lineHeight:25,
     
    },
inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:1,
       
        fontSize:18,
        marginBottom:10,
    },
    buttonStyle:{
      marginTop:10,
      textAlign:"center",
      padding:10,
  

    },
    txt:{
      fontSize:27,
      marginBottom:5,
      lineHeight:25,
      
    },
    text:{
      fontSize:20,
      lineHeight:25,
      
    },
})
export default BuyItem;