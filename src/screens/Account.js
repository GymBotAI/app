import { StatusBar } from "expo-status-bar";
import { Button, View, TextInput } from "react-native";
import {useState} from "react";

import LoginBox from "../components/LoginBox";

import { bgPrimary } from "../styles";

export default function AccountScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}
    >
        <View
        style={{
          width: '75%',
          height: '32%',
          alignSelf: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          backgroundColor: '#F5F5F5',
        }}
        >

        <LoginBox></LoginBox>
      
        </View>

        <StatusBar style="auto" />
    </View>
  );
}
