import React,{useState} from "react";
import { Text,StyleSheet,View, TextInput,TouchableOpacity, Alert} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const SignUp= ({navigation}) =>{
const[userName,setUserName]=useState("");
const[userPassword,setUserPassword]=useState("");
 
  const submit=()=>{
  
  if(userName !=" " && userPassword !=" "){
    Alert.alert(`thanks ${userName}`);
  navigation.navigate("Login");
      }
  };
  return (
<View style={styles.mainContainer}>
<View style={{flexDirection:"row",alignSelf:"center"}}>
<MaterialCommunityIcons name="charity" size={24} color="black"  /><Text style={styles.txt}>BUAN</Text>
</View>
<Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
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
<Text style={styles.label}>Enter your password</Text>
 <TextInput  style={styles.inputStyle}
autoCapitalize="none"  
autoCorrect={false}
SecureTextEntry={true}
value={userPassword}
onChangeText={(actualData)=>setUserPassword(actualData)}
/>
</View >

<TouchableOpacity 
style={[
  styles.buttonStyle,
  {
backgroundColor: agree ? "#4630EB" :"grey" ,
},
]}
 
  onPress={() => submit()} >
<Text tyle={styles.buttonText}>
    SignUp
  </Text>
</TouchableOpacity>
</View>
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
})
export default Signup;