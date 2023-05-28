import { Text, View } from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";

export default function ScreenHeader({ text }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../../assets/fonts/impwrench.ttf"),
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
          paddingTop: 40,
          paddingBottom: 5,
          backgroundColor: "white",
          width: "100%",
          zIndex: 2,
        }}>
      <Text
        style={{
          fontSize: 56,
          color: "black",
          fontFamily: "custom-font",
          letterSpacing: 1.5,
          textAlign: "center",
          zIndex: 2,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
