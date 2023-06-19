import { StatusBar } from "expo-status-bar";
import { ImageBackground, View, TextInput } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import LoginBox from "../components/LoginBox";
import LoginHeader from "../components/LoginHeader"

export default function Account({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={["blue", "black"]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../../assets/accountbgdark.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.3, // Adjust the opacity as per your preference
        }}
      >
        <View style={{ flex: 1 }} />
      </ImageBackground>

      <View style={{ position: "absolute", top: 40, left: 0, right: 0 }}>
        <LoginHeader />
      </View>

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: "32%",
            // backgroundColor: "rgba(245, 245, 245, 1)",
            borderRadius: 15,
          }}
        >
         <LoginBox navigation={navigation} />

        </View>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}
