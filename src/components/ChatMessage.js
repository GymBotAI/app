import { View, Text, Image } from "react-native";
import * as Font from "expo-font";

import { borderDefault, white, fontSize, font } from "../styles";

import { useEffect, useState } from "react";

const roleIcons = {
  assistant: require("../../assets/circleicon.png"),
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
            width: 40,
            height: 40,
            // borderRadius: 50,
            borderColor: borderDefault,
            marginTop: 5,
            marginBottom: "auto",
            marginLeft: -10, // Add margin only for assistant messages
            marginRight: 5,
          }}
          source={roleIcons[message.role]}
        />
      )}
      <View
        style={{
          backgroundColor: message.role === "user" ? "#0084ff" : "#e0e0e0",
          borderRadius: 12,
          paddingHorizontal: 10,
          paddingVertical: 6,
          maxWidth: "75%", // Limit the message width
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: 'black',
            fontSize: fontSize,
            fontFamily: "roboto-regular",
            padding: 3,
          }}
        >
          {message.content}
        </Text>
      </View>
    </View>
  );
}
