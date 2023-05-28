import { View, Text, Image } from "react-native";

import { borderDefault, white, fontSize, font } from "../styles";

const roleIcons = {
  assistant: require("../../assets/icon.jpg"),
  user: require("../../assets/user.png"),
};

const roleAlign = {
  assistant: "flex-start",
  user: "flex-end",
};

export default function ChatMessage({ message }) {
  const side = roleAlign[message.role];

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: side, // Align the message to the specified side
        marginBottom: 10,
      }}
    >
      {message.role === "assistant" && (
        <Image
          style={{
            width: 28,
            height: 28,
            borderRadius: 15,
            borderColor: borderDefault,
            borderWidth: 1,
            marginTop: "auto",
            marginLeft: -10, // Add margin only for assistant messages
            marginRight: 5,
          }}
          source={roleIcons[message.role]}
        />
      )}
      <View
        style={{
          backgroundColor: message.role === "user" ? "#0084ff" : "#888",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 6,
          maxWidth: "72%", // Limit the message width
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: white,
            fontSize: fontSize,
            fontFamily: font,
          }}
        >
          {message.content}
        </Text>
      </View>
    </View>
  );
}
