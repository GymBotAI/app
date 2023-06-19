import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";

import Chat from "../components/Chat";
import ScreenHeader from "../components/ScreenHeader";

import { bgPrimary, white } from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ScreenHeader text="GymBot"/>
        <Chat />
      <StatusBar style="auto" />
      </View>
  );
}
