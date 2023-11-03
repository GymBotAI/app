import {
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import LoginBox from "../components/StartUp/Login";
import LoginHeader from "../components/StartUp/test";

import type { NavigationProp } from "../types/navigation";

export default function Login({ navigation }: { navigation: NavigationProp }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ImageBackground
        source={require("../../assets/accountbgdark.jpg")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
          flex: 1,
        }}
      >
        <LinearGradient
          colors={["rgba(0,0,255,0.7)", "rgba(0,0,0,0.7)"]}
          style={{ flex: 1 }}
        >
          <LoginHeader navigation={navigation} />

          <LoginBox
            onLogin={() => {
              navigation.navigate("Home");
            }}
            onError={(error) => {
              Alert.alert("Error logging in", error);
            }}
            onCreateAccount={() => {
              navigation.navigate("SignUp");
            }}
          />

          <StatusBar barStyle="light-content" />
        </LinearGradient>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
