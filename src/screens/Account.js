import { StatusBar } from "expo-status-bar";
import { ImageBackground, View, TextInput } from "react-native";
import {useState} from "react";

import LoginBox from "../components/LoginBox";


import { bgPrimary } from "../styles";

export default function AccountScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
  
    <ImageBackground
      source={require("../../assets/accountbgdark.jpg")}
      resizeMode="cover"
      style={{
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <View
        style={{
          width: '90%',
          height: '32%',
          alignSelf: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          backgroundColor: "rgba(245, 245, 245, 0.2)",
          borderRadius: '15px',
        }}
        >

        <LoginBox></LoginBox>
      
        </View>

        <StatusBar style="auto" />
    </ImageBackground>
  );
}
