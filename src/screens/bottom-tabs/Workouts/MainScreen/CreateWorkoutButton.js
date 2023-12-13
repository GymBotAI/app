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
        <Text text="Create Workout" variant="header-huge" style={
          {marginBottom: bottomHeight,
          color: colors.white.default,
          shadowColor: colors.black.default,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 2,}}
          />

        <View style={createWorkout.buttonsContainer}>
          <TouchableOpacity
            style={createWorkout.designButtonContainer}
            onPress={goDesignManual}
          >
            <Text text="Manually" variant="header-default"/>

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
          <Text text="With AI" variant="header-default"/>
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
