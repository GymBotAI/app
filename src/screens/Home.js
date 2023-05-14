import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Chat from "../components/Chat";
import ScreenHeader from "../components/ScreenHeader";

import { bgPrimary } from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/gymbgdark.jpg")}
      resizeMode="cover"
      style={{
        backgroundColor: bgPrimary,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ScreenHeader text="GymBot AI" />
        <Chat />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
