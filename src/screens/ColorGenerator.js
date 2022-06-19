import React, { useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity, Alert, FlatList,} from "react-native";
const ColorGenerator = () => {
  const [newColor, setNewColor] = useState([]); //state variable containing an empty array

  const randomColor = () => { //function to generate random color in rgb  
    const red = Math.floor(Math.random() * 256); //math random generates random num b/w 0-1
    const blue = Math.floor(Math.random() * 256); //math floor will give a num b/w 0 to 255 aftr multiplying
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  console.log(newColor);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setNewColor([...newColor, randomColor()]);//...newcolor ka mtlb hai k pichli value ko to include kro and add into the randomcolor funct color 
        }}>
        <Text style={styles.textStyle}> Generate Random Color </Text>
      </TouchableOpacity>

      <FlatList //flatlist to display elements of array
        keyExtractor={(key) => key} //key ko return krwae ga or key rgb value hia
        data={newColor}
        renderItem={({ item }) => { //item me hume array ka data mil rha hai
          // console.log(item);
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item, // array item that contain diff rgb color
                  height: 100,
                  borderRadius: 5,
                  margintop: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                }}>
              <Text style={styles.textStyle}>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 80,
    },
    buttonStyle: {
      backgroundColor: "#00b0ff",
      position: "relative",
      overflow: "hidden",
      color: "#eee",
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    textStyle: {
      color: "white",
      fontSize: 20,
    },
    imageContainer: {
      marginVertical: 10,
      paddingHorizontal: 30,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
    },
  });
  
  export default ColorGenerator; 