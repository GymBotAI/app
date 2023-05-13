import { View, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import * as Device from "expo-device";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import { askGymBotAI } from "../api";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  return (
    <KeyboardAvoidingView
      behavior={Device.osName == "Android" ? "height" : "padding"}
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <ChatMessages messages={messages} />
        <ChatInput
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
            paddingTop: 10,
            paddingBottom: 20,
            paddingRight: 10,
            paddingLeft: 10,
          }}
          onSubmit={(text) => {
            askGymBotAI("user", text, messages, setMessages);
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
