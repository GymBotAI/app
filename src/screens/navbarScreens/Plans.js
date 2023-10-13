import { View, Text, StyleSheet, StatusBar } from "react-native";

import GymBotNavigation from "../../components/navbar";
import ScreenHeader from "../../components/ScreenHeader";

import PlansContainer from "../../components/Plans/PlansContainer";

export default function Plans({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Workout Plans" />

      <PlansContainer />

      <StatusBar barStyle="dark-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Plans"} />
    </View>
  );
}
