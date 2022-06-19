import { Text, StyleSheet, View ,TextInput} from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from ' react-native-web';
import firebase from 'firebase/app';
import "firebase/auth";

const Login = ({navigation}) => {

  const [values, setValues] = useState({
    email: "",
    pwd: ""
})

function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
}




  const Submit = () => {
    navigation.navigate("color");
  }
  const[Agree,setAgree]= useState(false);
    return (
      <View>
        <Text>LOGIN FORM</Text>
        <Text>You can reach us at anytime via any@thapa.com</Text>
        <View>
            <Text>Enter Your Name</Text>
            <TextInput  onChangeText={text => handleChange(text, "email")} />
        </View>
        <View>
          <Checkbox 
          value={Agree}
          onValueChange={()=> setAgree(!Agree)}
          color={Agree ? "#4630EB" : undefined}
          />
          <TouchableOpacity onPress={() => Submit()}>
          <Text> LOGIN </Text>
         </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({

});
export default Login;