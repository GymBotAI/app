import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function PlanInfoPage({
  onClose,
  plan,
  image,
}) {
  return (
    <View style={styles.container}>
      <ScrollView alwaysBounceVertical={false}>
      <ImageBackground
        source={image} // Replace with the actual path to your background image
        style={styles.overlay}
        blurRadius={5} // Adjust the blur intensity as needed
      >
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkButton}>
          <FontAwesome5 name="bookmark" color="orange" />
        </TouchableOpacity>
        <Text style={styles.planName}>{plan.name}</Text>
        <Text style={styles.planLength}>{plan.length} days</Text>
        <View style={styles.centeredBox}>
          <Text>{plan.data}</Text>
        </View>
      </ImageBackground>
      </ScrollView>
    </View>
  );
}


const windowWidth = Dimensions.get("window").width; // Offset 20 px for symmetry
const windowHeight = Dimensions.get("window").height -60;

const styles = StyleSheet.create({
  container: {
   width: windowWidth, height: windowHeight-40
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bookmarkButtonText: {
   color: "orange",
   fontSize: 18,
   fontWeight: "bold",
 },
 bookmarkButton: {
  position: "absolute",
  top: 20,
  right: 70,
  zIndex: 1,
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  justifyContent: "center",
  alignItems: "center",
 },
 overlay: {
   position: "absolute",
   top: 0,
   left: 0,
   width: windowWidth,
   height: windowHeight,
   backgroundColor: "white",
 },
 centeredBox: {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: [{ translateX: -150 }, { translateY: -170 }],
   width: 300,
   height: 350,
   borderRadius: 20,
   backgroundColor: "gray",
   justifyContent: "top",
   padding: 20,
 },
 planLength: {
   position: "absolute",
   top: "6%",
   fontWeight: "bold",
   fontSize: 15,
   color: "#646464",
   left: 40,
 },
 planName: {
  position: "absolute",
  top: "5%",
  left: 0,
  right: 0,
  fontWeight: "bold",
  fontSize: 20,
  textAlign: "center",
},
});
