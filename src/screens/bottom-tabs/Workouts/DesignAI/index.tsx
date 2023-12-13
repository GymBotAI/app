import { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { generateWorkout } from "$api/workouts";

import { colors } from "$styles";

import ScreenHeader from "$components/ScreenHeader";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export default function WorkoutSelectionScreen({ route, navigation }) {
  const { goal, subGoal, custom } = route.params;
  const [typedText, setTypedText] = useState("Enter relevant information");
  const [isInputFilled, setInputFilled] = useState(false);
  const [counter, setCounter] = useState(0);

  const [duration, setDuration] = useState("");
  const [equipment, setEquipment] = useState("");
  const [notes, setNotes] = useState("");

  const [gymBot, setGymBot] = useState("");

  const aiGenerate = async () => {
    setGymBot(
      await generateWorkout({
        duration: 45,
        equipment: ["dumbbell", "bench", "bands"],
        goal: goal,
        subgoal: subGoal,
        notes: notes,
      })
    );
    console.log(gymBot);
  };

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

        <TextInput
          value={duration}
          placeholder="Enter Duration"
          onChangeText={(text) => setDuration(text)}
          style={{
            marginLeft: 20,
            backgroundColor: colors.white.default,
            padding: 20,
            width: "40%",
            borderRadius: 10,
          }}
        />

        <TextInput
          value={equipment}
          placeholder="Enter Equipment"
          onChangeText={(text) => setEquipment(text)}
          style={{
            marginTop: 20,
            marginLeft: 20,
            backgroundColor: colors.white.default,
            padding: 20,
            width: "60%",
            borderRadius: 10,
          }}
        />

        <TextInput
          value={notes}
          placeholder="Enter Additional Information"
          onChangeText={(text) => setNotes(text)}
          style={{
            marginTop: 20,
            marginLeft: 20,
            backgroundColor: colors.white.default,
            padding: 20,
            width: "60%",
            borderRadius: 10,
          }}
        />

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            console.log(gymBot);
          }}
        ></TouchableOpacity>

        {/* <Text>{gymBot}</Text> */}

        {/* {counter > 0 ? (
        <Text>This component is displayed because the variable is greater than 10.</Text>
      ) : (
        <></>
      )} */}

        <TouchableOpacity style={[styles.button]} onPress={aiGenerate}>
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
            style={[styles.button, !isInputFilled && styles.disabledButton]}
            disabled={!isInputFilled}
          >
            <Text style={styles.text}>Continue</Text>
          </TouchableOpacity> */}
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
