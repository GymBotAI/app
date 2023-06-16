import { StatusBar } from "expo-status-bar";
import { ImageBackground, View, TextInput } from "react-native";
import { useState } from "react";

import LoginBox from "../components/LoginBox";

export default function AccountScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: '#82ffbc' }}>
      <ImageBackground
        source={require("../../assets/accountbgdark.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.7, // Adjust the opacity as per your preference
        }}
      >
        <View style={{ flex: 1 }} />
      </ImageBackground>

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
          <LoginBox />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
