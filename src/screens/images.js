import React from "react";
import {View ,Text, StyleSheet, Image} from "react-native";
const ImagesFile = () =>{
return(
<View>
    <Text>This is an iamge file</Text>
    <Image style={styles.imageStyle} source={require("../assets/jac2.jpg")} />
</View>
);
};
const styles=StyleSheet.create({
    imageStyle:{
        width:300,
        height:300,
    },
});
export default ImagesFile;