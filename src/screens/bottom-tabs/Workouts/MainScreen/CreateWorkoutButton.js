import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "$styles";

import { createWorkout } from "./.styles";

import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function CreateWorkoutButton({ goDesignAI, goDesignManual }) {
  const { width, height } = Dimensions.get("window");
  const cameraSize = Math.min(width, height) * 0.065;



  return (
    <View style={createWorkout.container}>
      <LinearGradient
        colors={[colors.blue.default, colors.blue.lightest]}
        style={createWorkout.blueRectangle}
      >
        <Text style={createWorkout.title}>
          Create a Workout
        </Text>

        <View style={createWorkout.buttonsContainer}>
          <TouchableOpacity
            style={createWorkout.designButtonContainer}
            onPress={goDesignManual}
          >
            <Text style={[createWorkout.buttonText]}>Manually</Text>

            <AntDesign
              name="arrowright"
              size={cameraSize}
              color={colors.black.default}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={createWorkout.designButtonContainer}
            onPress={goDesignAI}
          >
            <Text style={createWorkout.buttonText}>With AI</Text>
            <AntDesign
              name="arrowright"
              size={cameraSize}
              color={colors.black.default}
            />
          </TouchableOpacity>

        </View>
      </LinearGradient>
    </View>
  );
}
