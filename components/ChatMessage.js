import { View, Text } from "react-native";

import styles from "../styles";

export default function ChatMessage({ message, key }) {
  return (
    <View style={styles.ChatMessage} key={key}>
      <Text>{message.content}</Text>
    </View>
  );
}
