import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView } from "react-native";
import Workouts from "./WorkoutTabs";

export default function AddWorkoutScreen({ onClose }) {
  const slideUpAnimation = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const contentSize = 700; // Adjust this value based on the total content size
  const scrollViewSize = 400; // Adjust this value based on the visible size of the scroll view

  useEffect(() => {
    Animated.timing(slideUpAnimation, {
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

  const Scrollbar = ({ scrollAnim, contentSize, scrollViewSize }) => {
    const scrollBarScaleY = scrollAnim.interpolate({
      inputRange: [0, contentSize - scrollViewSize],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.scrollbarContainer}>
        <Animated.View style={[styles.scrollbar, { transform: [{ scaleY: scrollBarScaleY }] }]} />
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      onLayout={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
      <Animated.View
        style={[
          styles.contentContainer,
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
        <Workouts title="Biceps" text="sdahiofuioñsafjioñsauipdbfadoñbfiasndsaiufhsdabhuifhsdauisdaauiosdfauisdfauisdfhauisdaiu" />
        <Workouts title="Test1" text="Demo Tab 2" />
        <Workouts title="Test1" text="Demo Tab 2" />
        <Workouts title="Test1" text="Demo Tab 2" />
        <Workouts title="Test1" text="Demo Tab 2" />
        <Workouts title="Test1" text="Demo Tab 2" />
        <Workouts title="Test1" text="Demo Tab 2" />
      </Animated.View>
      <Scrollbar scrollAnim={slideUpAnimation} contentSize={contentSize} scrollViewSize={scrollViewSize} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    paddingVertical: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  scrollbarContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  scrollbar: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 10,
    borderRadius: 5,
  },
});