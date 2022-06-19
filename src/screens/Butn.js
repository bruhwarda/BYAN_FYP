import React from 'react';
import { StyleSheet,Image, Button,Text, View,Alert,TouchableOpacity} from 'react-native';
const Butn = () =>{
    return(
<View style={styles.btn}>
<Button style={styles.btnText}
title="join Now"
onPress={() =>{
Alert.alert("button pressed");//laptop pr ni dkgy ga
}}
//disabled cllickable na rhy
 />
 <TouchableOpacity style={styles.btnText}
onPress={() =>{
Alert.alert("button pressed");//laptop pr ni dkgy ga
}}>
    <Text>touchable opacity Button</Text>
    <Image style={styles.welcomeImage}
 source={require("../../assets/khaddi.jpg")}/> 
</TouchableOpacity>
    </View>
    );
};
const styles=StyleSheet.create({
    btn:{
     display:"flex",
        justifyContent:"center",
        alignItems:"center",
         },
    btnText:{
        fontSize:30,
        margin:200,
        textAlign:"center",
    },
     welcomeImage:{
        width:200,
        height:200,
       
    }
});
export default Butn;