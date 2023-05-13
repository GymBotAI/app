import { View, ScrollView } from "react-native";

import ChatMessage from "./ChatMessage";

import styles from "../styles";

export default function ChatMessages({ messages }) {
  return (
    <View
      style={{
        padding: 20,
        paddingBottom: 15,
        display: "flex",
        flex: 1,
        gap: 10,
        flexGrow: "1",
      }}
    >
      {messages?.length
        ? messages.map((message, i) => ChatMessage({ message, key: i }))
        : null}
    </View>
  );
}
