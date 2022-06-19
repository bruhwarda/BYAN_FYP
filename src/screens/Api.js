import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList} from 'react-native-web';
const Api = () =>{
    const array=[
        {
          index:"1"  ,
          name:"archive",
          year:"2022",
          genre:"horror"
        },
        {
            index:"2",
            name:"archive 1",
            year:"2022",
            genre:"horror",
          },
          {
            index:"3",
            name:"archive 2",
            year:"2022",
            genre:"horror",
          },
          {
            index:"4",
            name:"archive 3",
            year:"2022",
            genre:"horror",
          },
          {
            index:"5",
            name:"archive 4",
            year:"2022",
            genre:"horror",
          },
          {
            index:"6",
            name:"archive 5",
            year:"2022",
            genre:"horror",
          },
          {
            index:"7",
            name:"archive 7",
            year:"2022",
            genre:"horror",
          },
    ];
    return(
        <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
            return key.index;
        }}
        horizontal
        showHorizontalScrollIndicator={false}
        data={array}//arrayname
        renderItem={({item}) => {
 return( 
    <View style={styles.viewStyle}>
<Text style={styles.textStyle}>{item.name}</Text>
<Text style={styles.textStyle}>{item.year}</Text>
<Text style={styles.textStyle}>{item.genre}</Text>
</View>
);
        }}
        />

    );
};
const styles=StyleSheet.create({
    listStyle:{
textAlign:"center",
margin:20,


padding:5,


    },
    textStyle:{
      
  color:"white",
        backgroundColor:"black",
fontSize:30,

    },
    viewStyle:{
      padding:15,
      margin:20,
    }
});
export default Api;