import { StatusBar } from "expo-status-bar";
import { ImageBackground, View, Text } from "react-native";

import Chat from "../components/Chat";
import ScreenHeader from "../components/ScreenHeader";

import { bgPrimary } from "../styles";

export default function AccountScreen({ navigation }) {
  return (
    <View
      styles={{
        backgroundColor: bgPrimary,
      }}
    >
      <StatusBar style="auto" />
    </View>
  );
}
