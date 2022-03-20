import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
const Carddet = ({textData,imgSrc}) =>{
    return(
    <View style={styles.welcome}>
     <Text style={styles.welcomeText}>
{textData}
        </Text>
<Image style={styles.welcomeImage}
 source={imgSrc}/> 
    </View>
    );
};
const styles=StyleSheet.create({
    welcome:{
    marginTop:50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
     
    },
    welcomeText:{
        fontSize:30,
    },
    welcomeImage:{
        width:300,
        height:300,
    }
});
export default Carddet;