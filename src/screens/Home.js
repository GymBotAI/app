import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";

import Chat from "../components/Chat";
import ScreenHeader from "../components/ScreenHeader";

import { bgPrimary, white } from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/homebgdark.jpg")}
      resizeMode="cover"
      style={{
        backgroundColor: white,
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
        <ScreenHeader text="GYMBOT"/>
        <Chat />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
