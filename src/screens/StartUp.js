import {
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  StatusBar,
} from "react-native";
// import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import LoginBox from "../components/Login/LoginBox";
import StartupScreen from "../components/Login/StartUp";
import LoginHeader from "../components/Login/LoginHeader";

export default function StartUp({ navigation }) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1 }}>
      <StartupScreen navigation={navigation} />

      <StatusBar barStyle="light-content" />
    </View>
  );
}
