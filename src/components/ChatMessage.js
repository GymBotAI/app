import { View, Text, Image } from "react-native";
import * as Font from "expo-font";

import { borderDefault, white, fontSize, font } from "../styles";

import { useEffect, useState } from "react";

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
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: side, // Align the message to the specified side
        marginBottom: -8,
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
            fontFamily: "roboto-regular",
          }}
        >
          {message.content}
        </Text>
      </View>
    </View>
  );
}
