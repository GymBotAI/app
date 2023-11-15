import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback} from "react-native";

import { colors } from "$styles";

import ScreenHeader from "$components/ScreenHeader";
import BodyDefinition from "../DesignStart/BodyDefinition";
import BuildMuscle from "../DesignStart/BuildMuscle";
import GoalSelector from "../DesignStart/GoalSelector";
import SportsSpecific from "../DesignStart/SportsSpecific";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export default function WorkoutSelectionScreen({ route, navigation }) {
  const { goal, subGoal, custom } = route.params;
  const [goalText, setGoalText] = useState("How long do you want the workout to be?");
  const [typedText, setTypedText] = useState("")

  // const [duration, setDuration]

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= goalText.length) {
        setTypedText(goalText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 5); // Adjust typing speed here (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, [goalText]); // Listen for changes to goalText

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <ScreenHeader title="Workouts" />
      <View style={styles.chatContainer}>
        <LinearGradient
          colors={[colors.blue.default, colors.blue.lighter]} // Lighter blue gradient colors
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={styles.chatBox}
        >
          <Image
            source={require("$assets/circleicon.png")}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: colors.white.default,
              marginRight: 10,
            }}
          />
          <Text style={styles.chatText}>{typedText}</Text>
        </LinearGradient>
      </View>

            <TouchableOpacity onPress={() => {console.log(custom)}} style={{backgroundColor: 'red', flex: 1}}>

            </TouchableOpacity>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.lightest,
  },
  chatContainer: {
    alignItems: "center",
    margin: 15,
    marginBottom: 20,
  },
  chatBox: {
    backgroundColor: colors.white.default,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chatText: {
    flex: 1, // Allow text to wrap within the available space
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white.default,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
    width: "90%",
    backgroundColor: colors.blue.default,
    borderRadius: 8,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: colors.white.default, // Change the background color of the disabled button
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: colors.grey.lighter,
    fontWeight: "bold",
  },
});
