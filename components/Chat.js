import { View } from "react-native";
import { useState } from "react";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import styles from "../styles";
import { askGymBotAI } from "../api";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  return (
    <View style={styles.Chat}>
      <ChatMessages messages={messages} />
      <ChatInput
        onSubmit={(text) => askGymBotAI("user", text, messages, setMessages)}
      />
    </View>
  );
}
