import { View, Text, Image } from "react-native";

import { borderDefault, white, fontSize, font } from "../styles";

const roleIcons = {
  assistant: require("../../assets/icon.jpg"),
  user: require("../../assets/user.png"),
};

export default function ChatMessage({ message, key }) {
  return (
    <View key={key}>
      <Image
        style={{
          width: 32,
          height: 32,
          borderRadius: 15,
          borderColor: borderDefault,
          borderWidth: 1,
        }}
        source={roleIcons[message.role]}
      />
      <Text
        style={{
          color: white,
          fontSize: fontSize,
          fontFamily: font,
        }}
      >
        {message.content}
      </Text>
    </View>
  );
}
