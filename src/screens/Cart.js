import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView,View,StyleSheet,Text  } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Image } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="charity" />
const Cart = ({navigation}) => {
  const men=()=>{
    navigation.navigate("Men");
  }
  const buy=()=>{
    navigation.navigate("BuyItem");
  };
 
  return (
    <ScrollView>
    <View style={{flexDirection:"row",alignSelf:"center"}}>
    <MaterialCommunityIcons name="charity" size={24} color="black"  /><Text style={styles.txt}>BUAN</Text>
  </View>
    <Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
   <Card style={{ 
    
      alignSelf:"center",
     
     
      width:"50%"
      
  }}>
    
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
     <Button style={{backgroundColor: "green"}}  onPress={() => buy()}>Buy Now</Button>
       </Card.Actions>
       <View style={{flexDirection:"row"}}>
       <Button style={styles.coun}>-</Button>
        <Button style={styles.coun}>1</Button>  
       <Button style={styles.coun}>+</Button>
       </View>
       <View  style={{flexDirection:"row"}}>
       <Text style={styles.txt}>Price:</Text><Text style={styles.txt}>150</Text>
       </View>
      
  </Card>
  <Button onPress={() => men()}>Continue Shopping</Button>
  <View style={{flexDirection:"row",marginLeft:10}}>
  <Text style={styles.txt}>category:</Text>
  <Text style={styles.txt}>clothes</Text></View>
  <Text style={styles.txt}>description:</Text>
  <Text style={styles.description}>You can reach us anytime via @gmail.com.
  You can reach us anytime via @gmail.com.You can reach us anytime via @gmail.com.
  You can reach us anytime via @gmail.com.You can reach us anytime via @gmail.com.
  You can reach us anytime via @gmail.com.You can reach us anytime via @gmail.com</Text>
  

    </ScrollView>
    
  )
}
const styles=StyleSheet.create({
  
  description:{
    fontSize:20,
    color:"#7d7d7d",
    paddingBottom:20,
    alignSelf:"center",
    lineHeight:25,
    marginTop:10,
    marginBottom:20
  },
 coun:{
backgroundColor:"grey",
width:5,
height:30
   
 },
 txt:{
  fontSize:20,
  lineHeight:25,
  
},

 }
 );
export default Cart;