import { View, ScrollView } from "react-native";

import ChatMessage from "./ChatMessage";

import styles from "../styles";

export default function ChatMessages({ messages }) {
  return (
    <ScrollView
      style={{
        flexGrow: 1,
        overflow: "auto",
        height: "100%",
      }}
    >
      <View
        style={{
          padding: 20,
          paddingBottom: 15,
          display: "flex",
          flex: 1,
          gap: 10,
          flexGrow: "1",
          height: "100%",
        }}
      >
        {messages?.length
          ? messages.map((message, i) => ChatMessage({ message, key: i }))
          : null}
      </View>
    </ScrollView>
  );
}
