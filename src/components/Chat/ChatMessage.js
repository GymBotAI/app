import { View, Text, Image } from "react-native";
import * as Font from "expo-font";

import { borderDefault, fontSize } from "../../styles";

import { useEffect, useState } from "react";

const roleIcons = {
  assistant: require("../../../assets/icon.jpg"),
  user: require("../../../assets/user.png"),
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
        "roboto-regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
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
            width: 30,
            height: 30,
            borderRadius: 15,
            borderColor: borderDefault,
            marginTop: "auto",
            marginBottom: 5,
            marginLeft: -10, // Add margin only for assistant messages
            marginRight: 5,
          }}
          source={roleIcons[message.role]}
        />
      )}
      <View
        style={{
          backgroundColor: message.role === "user" ? "#2360e8" : "#e0e0e0",
          borderRadius: 12,
          paddingHorizontal: 10,
          paddingVertical: 6,
          maxWidth: "80%", // Limit the message width
          marginRight: -10,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 1,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: message.role === "user" ? "white" : "black",
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
