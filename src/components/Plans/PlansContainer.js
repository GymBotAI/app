import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Settings({ navigation }) {
 const [planFinderVisibility, setPlanFinderVisibility] = useState(false)

 const openPlanFinder = () => {
  setPlanFinderVisibility(!planFinderVisibility)
 }


  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.addButtonContainer} onPress={openPlanFinder}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
  },
  addText: {
   alignSelf: "center",
   fontSize: 23,
   fontWeight: "bold",
   paddingVertical: 10,
   color: "#dbdbdb",
 },
 addButtonContainer: {
  position: "absolute",
  bottom: 40,
  left: "50%",
  marginLeft: -22,
  width: 50,
  backgroundColor: "#1260de",
  borderRadius: 40,
  shadowColor: "black",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.6,
  shadowRadius: 10,
  elevation: 5,
},
});
