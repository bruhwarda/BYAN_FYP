
import React from 'react';
import {Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-web';
const   FlatListDemo = () => {
     const names = [
         {
              index:"1",
name:"warda",
     },
     {
          index:"2",
        name:"amara",
             },
             {
               index:"3",
                name:"alina",
                     },
                     {
                         index:"4",
                        name:"areej",
                             },
                             {
                              index:"5",
                                name:"tooba",
                                     },
                                     {
                                        index:"6",
                                        name:"zainab",
                                             }
    ];
    return (
      <FlatList style={styles.listStyle}
      keyExtractor={(index)=>{
return index.index;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
       data={names} renderItem ={(element) =>{
return  <Text style={styles.textStyle}> {element.item.name} </Text>
      }}
      />

      
    ); 
};
const styles= StyleSheet.create({
textStyle:{
     fontSize:40,
     padding:30,
     backgroundColor:"blue",
     color: "white",
},
listStyle:{
     textAlign:"center",
     margin:20,
     padding:10,
},
});
export default FlatListDemo;