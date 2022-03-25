import React from 'react';
import { StyleSheet,Linking, Text, View ,Image, Button} from 'react-native';
const NfCarddet = () =>{
    return(
    <View style={styles.container}>
     <Text style={styles.header}>
NetflixCard
        </Text>
        <View style={styles.card}>
        <Image  style={styles.cardImage}
source={{
  uri:"https://th.bing.com/th/id/OIF.nNVirggriC37Zoqw56S3bw?w=322&h=181&c=7&r=0&o=5&pid=1.7"
         }}/>
        
<View style={styles.cardInfo}>
<Text style={styles.cardTitle}>
    All of us dead
</Text>
<Text style={styles.cardText}>
  all of us dead   All of us dead  All of us dead  All of us dead.  All of us dead  All of us dead all of us deadall of us dead.all of us deadall of us dead.
</Text>
         </View>
         <View>
     <Button
     title="watch now"
     onPress={() =>
        Linking.openURL(
        "https://www.netflix.com/browser"
        )
    }
     />
         </View>
         </View>
    </View>
    );
};
const styles=StyleSheet.create({
    container:{
    marginTop:35,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
     
    },
    header:{
        color:"rgb(255,0,0)",
        fontSize:25,
        fontFamily:"JosefinSans_500Medium",
        
    },
  cardImage:{
      width:"100%",
      height:undefined,
      aspectRatio:1,
  },
  card:{
      borderWidth:1,
      width:250,
      alignItems:"center"
     
  },
  cardInfo:{
    marginVertical:5,
    alignItems:"center"
   
},
cardTitle:{
    fontSize:20,
    marginBottom:5,
    textSgadowOffset:{width:-1, height:1},
    textShadowRadius:10,
    textShadowColor:"rgba(0,0,0,0.75)"
   
},
cardText:{
    color:"#999",
    fontSize:15,
    marginBottom:5,
    padding:5,
    lineHeight:22,
    textAlign:"justify"
   
},
});

export default NfCarddet;