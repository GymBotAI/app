import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, TextInput, Keyboard } from "react-native";
import Workouts from "./WorkoutTabs";
import { KeyboardAvoidingView } from "react-native-web";

export default function AddWorkoutScreen({ onClose }) {
  const slideUpAnimation = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const contentSize = 700; // Adjust this value based on the total content size
  const scrollViewSize = 400; // Adjust this value based on the visible size of the scroll view
  const textInputRef = useRef(null);

  useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 1,
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

  const handleNewWorkout = () => { //Handles the creation of new workouts
    Keyboard.dismiss(); // Close the keyboard if it's already open
    textInputRef.current.focus(); // Focus on the text input to open the keyboard
  };

  const Scrollbar = ({ scrollAnim, contentSize, scrollViewSize }) => {
    //controlls the Taskbar y-dir
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
        <View style={styles.addWrapperCloseButton}>
          <Text>X</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newWorkoutbutton} onPress={handleNewWorkout}>
          <View style={styles.newWorkoutButtonWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
        <TextInput
          ref={textInputRef}
          style={styles.newWorkoutInput}
          placeholder="Enter workout"
          autoFocus={false} // Set this to true if you want the input to be focused automatically when the screen opens
        />
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
  contentContainer: {paddingVertical: 60,}, // Padding at top & bottom.

  closeButton: {
    position: "absolute",
    top: -7,
    left: -4,
    padding: 10,
    zIndex: 1,
  },
  newWorkoutbutton: {
    position: "absolute",
    top: -7,
    left: 290,
    padding: 10,
    zIndex: 1,
  },
  newWorkoutButtonWrapper: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  newWorkoutInput: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapperCloseButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
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
