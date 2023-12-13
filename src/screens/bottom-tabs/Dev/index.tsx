import type { NavigationScreens } from "$types/navigation";

import { SafeAreaView, StatusBar, Text } from "react-native";

// This is the navigation stack for the Home tab
// It's a stack navigator because we want to be
// able to navigate to the Settings screen

export default function Workouts({ navigation }) {
  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      <Text>Dev</Text>

      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
