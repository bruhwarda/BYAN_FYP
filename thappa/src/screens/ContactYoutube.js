import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, Button, unstable_batchedUpdates } from "react-native";
import Checkbox from "expo-checkbox";
import { MaterialCommunityIcons } from '@expo/vector-icons';
//IMPORTED HERE
import firebase from 'firebase/app';
import "firebase/auth";
const ContactYoutube = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })
  //const [Email, setEmail] = useState("")
  //const [Password, setPassword] = useState("")
const [agree, setAgree] = useState(false)
  const updateError = (error, stateUpdater) => {
 stateUpdater(error);
 setTimeout(() => {
     stateUpdater('')
    }, 2500);
  }
  const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
  }
  const isValidEmail = (value) => {
    const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regx.test(value)
  }
  const isValidForm = () => {
    if (!isValidObjField(userInfo)) return updateError('Required All Fields!', setError)
    if (!isValidEmail(email)) return updateError('Invalid Email', setError)
    if (!password.trim() || password.lenght < 8) return updateError('Password Too short', setError)
  }

 const [error, setError] = useState("")
  const { email, password } = userInfo;
  function handleChange(value, eventName) {
    setUserInfo({ ...userInfo, [eventName]: value })
  }


  function Login() {
    if(isValidForm()){
    console.log(userInfo);
    }
   // const { email, pwd } = values
//USED HERE----------------------
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res)
        navigation.navigate("Home")
      })
      .catch((error) => {
        console.log(error)
        alert(error.message)
       // ..
      });
  }


  {/*const[userName,setUserName]=useState("");
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
  };*/}
  return (
    <View style={styles.mainContainer}>
      {error ? <Text style={styles.description}>{error}</Text> : null}
      <Text style={styles.mainHeader}>Login</Text>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <MaterialCommunityIcons name="charity" size={24} color="black" /><Text style={styles.txt}>BUAN</Text>
      </View>
      <Text style={styles.description}>You can reach us anytime via BUAN@gmail.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput style={styles.inputStyle}
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
          onChangeText={(value) => handleChange(value, "email")}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(value) => handleChange(value, "password")}
          secureTextEntry={true}
        />
      </View >
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          i have read and agreed the terms.
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "green" : "grey",
          },
        ]}
        disbaled={!agree}
        onPress={() => Login()} >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff"
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",

  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,

  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,

  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,

    fontSize: 18,
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 10,
    textAlign: "center",
    padding: 10,


  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },

})
export default ContactYoutube;
