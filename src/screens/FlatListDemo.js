
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList} from 'react-native-web';
const FlatListDemo =() => {
     const arrayName=[
        {
          index:"1",
         name:"alina",
        },
        {
          index:"2",
         name:"jay"
        },
     ];
   return (
      <FlatList
      KeyExtractor={(key) =>{
        return key.index;
      }
      }
      horizontal
      //inverted
      showHorizontalScrollIndicator={false}
      //numColums={2}
       data={arrayName}
            renderItem={({item}) => {
          return(
       
 <Text style={styles.flat}>
                {item.name}
            </Text>
        
          );
      }}
      />
    );
  }
  const styles=StyleSheet.create({
    flat:{
      fontSize:40,
      backgroundColor:"black",
      margin:20,
      color:"white",
    }

  });
export default FlatListDemo;

