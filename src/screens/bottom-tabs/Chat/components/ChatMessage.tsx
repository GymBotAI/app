import type { JSX } from "react";

import { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { colors, fontSize } from "$styles";

import Text from "$components/Text";

import * as Font from "expo-font";

const roleIcons = {
  assistant: require("$assets/circleicon.png"),
  user: require("$assets/user.png"),
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
      "roboto-regular": require("$assets/fonts/Roboto-Regular.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return <Text text="Loading..." />;
  }

  let messageJsxContent: JSX.Element;

  switch (message.type) {
    case "chat":
    default: {
      messageJsxContent = (
        <View
          style={{
            backgroundColor:
              message.role === "user"
                ? colors.blue.default
                : colors.grey.lighter,
            borderRadius: 12,
            paddingHorizontal: 10,
            paddingVertical: 6,
            maxWidth: "80%", // Limit the message width
            marginRight: -10,
            shadowColor: colors.black.default,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 1,
          }}
        >
          <Text
            text={message.content}
            style={{
              textAlign: "left",
              color:
                message.role === "user"
                  ? colors.white.default
                  : colors.black.default,
              fontSize,
              fontFamily: "roboto-regular",
              padding: 3,
            }}
          />
        </View>
      );
      break;
    }

    case "workoutScreen": {
      messageJsxContent = (
        <TouchableOpacity
          style={{
            backgroundColor: colors.orange.default, // TODO: @ShiGame45 use styles
            padding: 10,
            borderRadius: 10,
          }}
          onPress={goToWorkoutScreen}
        >
          <Text
            text="Go to workout screen"
            style={{
              color: colors.white.default,
              fontSize,
            }}
          />
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
            borderColor: colors.white.default,
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
