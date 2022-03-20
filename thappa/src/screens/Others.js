import React from 'react'
import { ScrollView,View,StyleSheet,Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Image } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const LeftContent = props => <Avatar.Icon {...props} icon="charity" />
const Others = ({navigation}) => {
  const cart=()=>{
    navigation.navigate("Cart");
  };
  const buy=()=>{
    navigation.navigate("BuyItem");
  };
  return(

    <ScrollView>
    <Text style={styles.description}> Furniture</Text>
    <View style={{flexDirection:"row",alignSelf:"center"}}>
    <MaterialCommunityIcons name="charity" size={24} color="black"  /><Text style={styles.txt}>BUAN</Text>
  </View>
    <Text style={styles.description}>You can reach us anytime via @gmail.com</Text>
  
    <View style={{flexDirection:"row",justifyContent:'space-around'}}>
    <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button  onPress={() => cart()} >  Add to Cart </Button>
        <Button  onPress={() => buy()}>Buy Now</Button>
         </Card.Actions>
         <View  style={{flexDirection:"row"}}>
         <Text style={styles.txt}>Price:</Text><Text style={styles.txt}>150</Text>
         </View>
    </Card>
    <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent}/>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button  onPress={() => cart()}>Add to Cart</Button>
      <Button  onPress={() => buy()}>Buy Now</Button>
    </Card.Actions>
    <View  style={{flexDirection:"row"}}>
    <Text style={styles.txt}>Price:</Text><Text style={styles.txt}>150</Text>
    </View>
  </Card>
    </View>
    <Text style={styles.description}></Text>
    <View style={{flexDirection:"row", alignItems:"center",justifyContent:'space-around'}}>
    <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button  onPress={() => cart()}>Add to Cart</Button>
        <Button  onPress={() => buy()}>Buy Now</Button>
      </Card.Actions>
      <View  style={{flexDirection:"row"}}>
      <Text style={styles.txt}>Price:</Text><Text style={styles.txt}>150</Text>
      </View>
    </Card>
    <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button  onPress={() => cart()}>Add to Cart</Button>
      <Button  onPress={() => buy()}>Buy Now</Button>
    </Card.Actions>
    <View  style={{flexDirection:"row"}}>
    <Text style={styles.txt}>Price:</Text><Text style={styles.txt}>150</Text>
    </View>
  </Card>
    </View>
    </ScrollView>
  );
  };
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
    txt:{
      fontSize:20,
      lineHeight:25,
      
    }
    }); 

export default Others;