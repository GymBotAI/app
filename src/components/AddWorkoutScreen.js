import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";

export default function AddWorkoutScreen({ onClose }) {
  const slideUpAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 1.05,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressClose = () => {
    Animated.timing(slideUpAnimation, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: true,
    }).start(onClose);
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: slideUpAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [600, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity style={styles.closeButton} onPress={handlePressClose}>
        <Text>X</Text>
      </TouchableOpacity>
      <Text>Add Workout Screen</Text>
      {/* Add your desired content here */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   height: 10,
   backgroundColor: "#000",
   justifyContent: "flex-end",
   alignItems: "center",
 },
 closeButton: {
   position: "absolute",
   top: 10,
   left: 10,
   padding: 10,
   zIndex: 1,
 },
});