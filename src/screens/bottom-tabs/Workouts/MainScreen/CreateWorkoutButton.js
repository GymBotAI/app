import {
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "$styles";

import { createWorkout } from "./.styles";

import Text from "$components/Text";

import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Button from "$components/Button";

export default function CreateWorkoutButton({ goDesignAI, goDesignManual }) {
  const { width, height } = Dimensions.get("window");
  const holder = Math.min(width, height);
  bottomHeight = holder / 9;
  const cameraSize = Math.min(width, height) * 0.065;



  return (
    <View style={createWorkout.container}>
      <LinearGradient
        colors={[colors.blue.default, colors.blue.lightest]}
        style={createWorkout.blueRectangle}
      >
        <Text text="Create Workout" variant="header-big" style={
          {marginBottom: bottomHeight,
          color: colors.white.default,}}
          />

        <View style={createWorkout.buttonsContainer}>
          <TouchableOpacity
            style={createWorkout.designButtonContainer}
            onPress={goDesignManual}
          >
            {/* <Text style={[createWorkout.buttonText]}>Manually</Text> */}

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
            {/* <Text style={createWorkout.buttonText}>With AI</Text> */}
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
