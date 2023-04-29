import { View, Text, Image } from "react-native";

import styles from "../styles";

const roleIcons = {
  assistant: require("../assets/icon.jpg"),
  user: require("../assets/user.png"),
};

export default function ChatMessage({ message, key }) {
  return (
    <View style={styles.ChatMessage} key={key}>
      <Image style={styles.ChatMessageIcon} source={roleIcons[message.role]} />
      <Text style={styles.ChatMessageText}>{message.content}</Text>
    </View>
  );
}
