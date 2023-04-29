import { View } from "react-native";

import ChatMessage from "./ChatMessage";

import styles from "../styles";

export default function ChatMessages({ messages }) {
  return (
    <View style={styles.ChatMessages}>
      {messages?.length
        ? messages.map((message, i) => ChatMessage({ message, key: i }))
        : null}
    </View>
  );
}
