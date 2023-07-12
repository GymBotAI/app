import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import Workouts from "./WorkoutTabs";

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
    }).start(() => {
      onClose(); // Call the callback function to update the state in the parent component
    });
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
      <Workouts text="" />
      <Workouts text="Demo Tab 2" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
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



