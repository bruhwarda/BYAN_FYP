import React,{useState} from "react";
import { Text,StyleSheet,View, TextInput,TouchableOpacity, Alert} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from 'firebase/app';
import "firebase/auth";
 const FirstPage= ({navigation}) =>{
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    cpassword: ""
})
const isValidObjField =(obj) =>{
   return  Object.values(obj).every(value => value.trim())
}
const updateError=(error,stateUpdater) =>{
  stateUpdater(error);
  setTimeout(() =>{
stateUpdater('')
  },4500);
}
const isValidEmail= (value) =>{
  const regx =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regx.test(value)
}
const{email,password,cpassword}= userInfo;

function handleChange(value, eventName) {
    setUserInfo({...userInfo,[eventName]: value })
}
const [error,setError]=useState("")
 function submit() {
    //const { email, pwd, pwd2 } = values
if(!isValidObjField(userInfo)) return updateError('Required All Fields',setError)
if(!isValidEmail(email)) return  updateError('Invalid Email',setError)
if(!password.trim() || password.lenght < 8) return  updateError('Password less than 8 Characters',setError)
    if (password==cpassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              navigation.navigate("Login")
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    } else {
       Alert.alert("Passwords are different!")
    }
}




{ /* const[userName,setUserName]=useState("");
const[userEmail,setUserEmail]=useState("");
const[userPassword,setUserPassword]=useState("");
 
  const submit=()=>{
   // return Alert.alert(userName,userPassword);
  if(userName !="" && userPassword!="" && userEmail!=""){
    Alert.alert(`thanks ${userName}`);
  navigation.navigate("Login",{myName: `${userName}`});
      }else{
     Alert.alert(`incorrect`);
  }
  }; */}
  return (
   
<View style={styles.mainContainer}>
{error ? <Text style={styles.description}>{error}</Text>:null}
<Text style={styles.mainHeader}>Sign Up</Text>
<View style={{flexDirection:"row",alignSelf:"center"}}>
<MaterialCommunityIcons name="charity" size={24} color="black"  /><Text style={styles.txt}>BUAN</Text>
</View>
<Text style={styles.description}>You can reach us anytime via BUAN@gmail.com</Text>
  <View style={styles.inputContainer}>
<  Text style={styles.labels}>Enter your Email</Text>
  <TextInput  style={styles.inputStyle}
autoCapitalize="none"
value={email} 
autoCorrect={false}
onChangeText={(value) => handleChange(value, "email")}
/>
</View>
<View style={styles.inputContainer}>
<Text style={styles.labels}>Enter your Password</Text>
  <TextInput  style={styles.inputStyle}
autoCapitalize="none" 
autoCorrect={false}
value={password}
secureTextEntry={true} 
 onChangeText={(value) => handleChange(value, "password")}
/>
</View>
<View style={styles.inputContainer}>
<Text style={styles.labels}>Confirm Your Password</Text>
 <TextInput  style={styles.inputStyle}
autoCapitalize="none"  
autoCorrect={false}
value={cpassword}
secureTextEntry={true} 
 onChangeText={(value) => handleChange(value, "cpassword")}
/>
</View >

<TouchableOpacity 
style={[
  styles.buttonStyle,
  {
backgroundColor:"green" ,
},
]}

  onPress={() => submit()} >
<Text style={styles.buttonText}>
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
    buttonText: {
      fontSize: 16,
      color: "#fff",
    },
})
export default FirstPage;
