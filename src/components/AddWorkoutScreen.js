import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import Workouts from "./WorkoutTabs";

const { width } = Dimensions.get("window");

export default function AddWorkoutScreen({ onClose }) {
  const slideUpAnimation = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const contentSize = 700; // Adjust this value based on the total content size
  const scrollViewSize = 400; // Adjust this value based on the visible size of the scroll view
  const textInputRef = useRef(null);
  const [isAddingWorkout, setIsAddingWorkout] = useState(false);
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [workouts, setWorkouts] = useState([
    { title: "Biceps", text: "sdahiofuio" },
    { title: "Test1", text: "Demo \nTab 2" },
    { title: "Test1", text: "Demo Tab 2" },
    { title: "Test1", text: "Demo Tab 2" },
    { title: "Test1", text: "Demo Tab 2" },
    { title: "Test1", text: "Demo Tab 2" },
    { title: "Test1", text: "Demo Tab 2" },
  ]);

  useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressClose = () => {
    Animated.timing(slideUpAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      onClose(); // Call the callback function to update the state in the parent component
    });
  };

  const handleNewWorkout = () => {
    setIsAddingWorkout(true);
  };

  const handleSaveWorkout = () => {
    setIsAddingWorkout(false);

    const newWorkout = {
      title: workoutTitle,
      text: workoutDescription,
    };

    setWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]);
    setWorkoutTitle("");
    setWorkoutDescription("");
  };

  const Scrollbar = ({ scrollAnim, contentSize, scrollViewSize }) => {
    const scrollBarScaleY = scrollAnim.interpolate({
      inputRange: [0, contentSize - scrollViewSize],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.scrollbarContainer}>
        <Animated.View
          style={[
            styles.scrollbar,
            { transform: [{ scaleY: scrollBarScaleY }] },
          ]}
        />
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
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
        {!isAddingWorkout && (
          <TouchableOpacity
            style={styles.newWorkoutButton}
            onPress={handleNewWorkout}
          >
            <View style={styles.newWorkoutButtonWrapper}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
        )}
        {isAddingWorkout && (
          <View style={styles.newWorkoutInputContainer}>
            <TextInput
              style={styles.newWorkoutInput}
              placeholder="Title"
              value={workoutTitle}
              onChangeText={setWorkoutTitle}
            />
            <TextInput
              style={styles.newWorkoutInput}
              placeholder="Description"
              value={workoutDescription}
              onChangeText={setWorkoutDescription}
            />
            <TouchableOpacity
              style={styles.saveWorkoutButton}
              onPress={handleSaveWorkout}
            >
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        )}
        {workouts.map((workout, index) => (
          <Workouts key={index} title={workout.title} text={workout.text} />
        ))}
      </Animated.View>
      <Scrollbar
        scrollAnim={slideUpAnimation}
        contentSize={contentSize}
        scrollViewSize={scrollViewSize}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F3F3",
  },
  contentContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  closeButton: {
    position: "absolute",
    top: 0,
    left: 20,
    zIndex: 1,
  },
  newWorkoutButton: {
    position: "absolute",
    top: 0,
    right: 20,
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
  newWorkoutInputContainer: {
    alignItems: "center",
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
  saveWorkoutButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 10,
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