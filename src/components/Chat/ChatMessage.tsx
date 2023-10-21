import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";

import { borderDefault, fontSize, bgPrimary } from "../../styles";

import { useEffect, useState } from "react";
import type { JSX } from "react";

const roleIcons = {
  assistant: require("../../../assets/circleicon.png"),
  user: require("../../../assets/user.png"),
};

const roleAlign = {
  assistant: "flex-start",
  user: "flex-end",
};

export default function ChatMessage({ message, goToWorkoutScreen }) {
  const side = roleAlign[message.role];
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load font
  useEffect(() => {
    Font.loadAsync({
      "roboto-regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  let messageJsxContent: JSX.Element;

  switch (message.type) {
    case "chat":
    default: {
      messageJsxContent = (
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
              fontFamily: fontLoaded ? "roboto-regular" : null,
              padding: 3,
            }}
          >
            {message.content}
          </Text>
        </View>
      );
      break;
    }

    case "workoutScreen": {
      messageJsxContent = (
        <TouchableOpacity
          style={{
            backgroundColor: "orange", // TODO: @ShiGame45 use styles
            padding: 10,
            borderRadius: 10,
          }}
          onPress={goToWorkoutScreen}
        >
          <Text
            style={{
              color: "white",
              fontSize,
            }}
          >
            Go to workout screen
          </Text>
        </TouchableOpacity>
      );
      break;
    }
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

      {messageJsxContent}
    </View>
  );
}
