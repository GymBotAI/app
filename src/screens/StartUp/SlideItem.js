import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient"; // Import the LinearGradient component from Expo

const { width, height } = Dimensions.get("window");

const SlideItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <LinearGradient // Use LinearGradient as a wrapper
        colors={["#adadad", "#000000"]} // Adjust opacity values
        style={styles.gradient}
      >
        <ImageBackground
          source={item.img}
          resizeMode="cover"
          style={styles.image}
        />
      </LinearGradient>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, // Make the gradient cover the entire container
  },
  image: {
    width,
    height,
    resizeMode: "cover",
    opacity: 0.5,
  },
});
