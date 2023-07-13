import { View, StatusBar } from "react-native";

import EditSettings from "../components/settings/EditSettings";
import GymBotNavigation from "../components/navbar";
import ScreenHeader from "../components/ScreenHeader";

export default function Settings({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Settings" />
      <EditSettings />
      <StatusBar barStyle="dark" />

      <GymBotNavigation navigation={navigation} />
    </View>
  );
}
