mport React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
const WelcomePage = ({navigation}) => {
    const start=()=>{
        navigation.navigate("SignUp");
      };
  return (
    <View style={styles.welcome}>
    <Image style={styles.welcomeImage}
    source={require("../../assets/buan.jpg")} resizeMode="contain"/> 
    <TouchableOpacity 
    style={[
      styles.buttonStyle,
      {
    backgroundColor: "green"  ,
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
    borderRadius:350,
   alignSelf:"center",
   alignItems:"center",
    width:200
   }
    ]}
     onPress={() => start()}>
     <Text tyle={styles.buttonText}>
      Get Started
      </Text>
    </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
welcome:{

},
welcomeImage:{
    marginTop:40,
    marginBottom:5,
    width:100,
    height:100,
    
    
    }

});

export default WelcomePage;  