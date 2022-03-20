import React, { useEffect,useState } from "react";
import { Text,StyleSheet,Image, View, FlatList, ActivityIndicator, } from "react-native";
const HookEffect = () =>{
const [myUserData,setmyUserData]=useState();
 const[isLoaded,setIsLoaded]=useState(true);
const getUserData=async()=>{
try{
const response=await fetch("https://thapatechnical.github.io/userapi/users.json"
);
const myData=await response.json();
setmyUserData(myData);
setIsLoaded(false);
}catch(error){
    console.log(error);
}
    }
    useEffect(()=>{
        getUserData();
    },[]);
  return (
    
<View style={styles.body}>
    
    {isLoaded?(
        <View>
            <ActivityIndicator/>
            </View>
    ):(
    <FlatList 
    data={myUserData}
    renderItem={({item})=>{
        return(
        <View style={styles.card}>
        <View style={styles.imgContainer}>
         <Image style={styles.imgStyle}
            resizeMode="cover"
            source={{uri:item.image}}/>
</View>
            <View style={styles.mainContain}>
            
            <Text>{item.id} </Text>
     <Text>{item.name} </Text>
     <Text>{item.email} </Text>
     <Text>{item.mobile} </Text>
                </View>
                </View>
        );
    }}
    />
    )}

</View>

  
)};
const styles=StyleSheet.create({
   body:{
    backgroundColor:"rgb(220,200,233)",
   },
mainContain:{
    alignSelf:"center",
  backgroundColor:"grey",
  width:200,
  height:110,
  padding:5
  },
imgStyle:{
    alignSelf:"center",
    marginTop:10,
    width:200,
    height:100,
    borderColor:"grey",
    borderWidth:2
   
}
})
export default HookEffect;