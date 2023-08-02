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
  Modal,
} from "react-native";
import Workouts from "./WorkoutTabs";
import { circularColour } from "../../styles";

export default function AddWorkoutScreen({ onClose, onWorkoutSelect }) {
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

  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDay = new Date().getDate();
      if (newDay !== currentDay) {
        setCurrentDay(newDay);
        resetCircleColors();
      }
    }, 60000); // Check every minute for a new day

    return () => clearInterval(interval);
  }, [currentDay]);

  const resetCircleColors = () => {
    const updatedWorkouts = workouts.map((workout) => ({
      ...workout,
      isPressed: false,
    }));
    setWorkouts(updatedWorkouts);
  };

  const handlePressClose = () => {
    Animated.timing(slideUpAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      onClose();
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

  const handleWorkoutPress = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index] = {
      ...updatedWorkouts[index],
      isPressed: !updatedWorkouts[index].isPressed,
    };
    setWorkouts(updatedWorkouts);
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
            <Text style={styles.cancelWorkoutButtonText}>X</Text>
          </View>
        </TouchableOpacity>
        {!isAddingWorkout && (
          <TouchableOpacity
            style={styles.newWorkoutButton}
            onPress={handleNewWorkout}
          >
            <View style={styles.newWorkoutButtonWrapper}>
              <Text style={styles.newWorkoutButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        )}
        <Modal visible={isAddingWorkout} animationType="slide">
          <View style={styles.newWorkoutModal}>
            <TextInput
              placeholder="Muscle Group"
              placeholderTextColor="#888" // Modify the placeholder text color here
              style={styles.newWorkoutTitleInput}
              value={workoutTitle}
              onChangeText={setWorkoutTitle}
            />
            <TextInput
              placeholder="Workout"
              placeholderTextColor="#888" // Modify the placeholder text color here
              style={styles.newWorkoutDescriptionInput}
              value={workoutDescription}
              onChangeText={setWorkoutDescription}
              multiline={true}
              numberOfLines={6}
              returnKeyType="default"
              blurOnSubmit={false}
              onSubmitEditing={() => {
                setWorkoutDescription(
                  (prevDescription) => prevDescription + "\n"
                );
              }}
            />
            <TouchableOpacity
              style={styles.saveWorkoutButton}
              onPress={handleSaveWorkout}
            >
              <Text style={styles.saveWorkoutButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelWorkoutButton}
              onPress={() => setIsAddingWorkout(false)}
            >
              <View style={styles.addWrapperCloseButton}>
                <Text style={styles.cancelWorkoutButtonText}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        {workouts.map((workout, index) => (
          <TouchableOpacity
            key={index}
            style={styles.workoutContainer}
            onPress={() => handleWorkoutPress(index)}
          >
            <Workouts
              title={workout.title}
              text={workout.text}
              onPress={() => {
                onWorkoutSelect(workout);
                setWorkouts(workouts.filter((w, i) => i !== index));
              }}
              circleColor={workout.isPressed ? "green" : circularColour} // Pass the circleColor prop
            />
          </TouchableOpacity>
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
    backgroundColor: "#FFFFFF", // Replace with your desired background color
  },
  contentContainer: {
    paddingTop: 80, // Adjust the value for appropriate spacing
    paddingHorizontal: 30, // Adjust the value for appropriate spacing
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  newWorkoutButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  newWorkoutButtonWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFF",
    borderWidth: 2,
  },
  newWorkoutButtonText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  newWorkoutModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
  },
  newWorkoutTitleInput: {
    width: "95%",
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  newWorkoutDescriptionInput: {
    width: "95%",
    height: "40%",
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  saveWorkoutButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#FF6347",
  },
  saveWorkoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelWorkoutButton: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 1,
  },
  cancelWorkoutButtonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  addWrapperCloseButton: {
    width: 45,
    height: 45,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderRadius: 60,
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
