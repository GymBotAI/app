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

export default function Account({ navigation }) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
      <View style={{flex: 1}}>
        {/* <View style={{ position: "absolute", top: 40, left: 0, right: 0 }}>
          <LoginHeader navigation={navigation}/>
        </View> */}
          <StartupScreen navigation={navigation} />

        {/* <StatusBar barStyle="light-content" /> */}
      </View>
  );
}
