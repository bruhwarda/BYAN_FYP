import React,{useState} from "react";
import { Text,StyleSheet,View, TextInput,TouchableOpacity, Alert,Button}from "react-native";
import Checkbox from "expo-checkbox";
import { MaterialCommunityIcons } from '@expo/vector-icons';
 const ContactYoutube= ({navigation}) =>{
const[userName,setUserName]=useState("");
const[userPassword,setUserPassword]=useState("");
  const [agree,setAgree]=useState(false);
  const submit=()=>{
   // return Alert.alert(userName,userPassword);
  if(userName==="alina" && userPassword==="thappa"){
    Alert.alert(`thanks ${userName}`);
  navigation.navigate("Home",{myName: `${userName}`});
      }else{
     Alert.alert(`incorrect`);
  }
  };
  return (
<View style={styles.mainContainer}>

<Text style={styles.mainHeader}>Login</Text>
<View style={{flexDirection:"row",alignSelf:"center"}}>
  <MaterialCommunityIcons name="charity" size={24} color="black"  /><Text style={styles.txt}>BUAN</Text>
</View>
<Text style={styles.description}>You can reach us anytime via BUAN@gmail.com</Text>
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
<Text style={styles.labels}>Enter your password</Text>
 <TextInput  style={styles.inputStyle}
autoCapitalize="none"  
autoCorrect={false}
secureTextEntry={true}
value={userPassword}
onChangeText={(actualData)=>setUserPassword(actualData)}
/>
</View >
<View style={styles.wrapper}>
<Checkbox
value={agree}
onValueChange={() => setAgree(!agree)}
color={agree ? "#4630EB" :undefined}
/> 
<Text style={styles.wrapperText}>
i have read and agreed the terms.
</Text>
</View>
<TouchableOpacity 
style={[
  styles.buttonStyle,
  {
backgroundColor: agree ? "green" :"grey" ,
},
]}
  disbaled={!agree}
  onPress={() => submit()} >
<Text tyle={styles.buttonText}>
    Login
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
    buttonText: {
      fontSize: 16,
      color: "#fff",
    },
   
})
export default ContactYoutube;
