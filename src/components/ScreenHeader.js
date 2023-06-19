import { TouchableOpacity, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";

export default function ScreenHeader({ text, onOpenNavbar }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../../assets/fonts/Roboto-Black.ttf"),
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
        paddingBottom: 8,
        backgroundColor: "#1260de",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 40, // Adjust the value as needed
        borderBottomRightRadius: 40, // Adjust the value as needed
        overflow: "hidden",
      }}
    >
      <Text
        style={{
          fontSize: 48,
          color: "#e0e0e0",
          fontFamily: "custom-font",
          fontWeight: "bold",
          letterSpacing: 1.5,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
      <Image
        source={require("../../assets/circleicon.png")}
        style={{
          width: 50, // Adjust the size as needed
          height: 50, // Adjust the size as needed
          marginLeft: 10, // Add this line to set the desired spacing between the image and text
        }}
      />
    </View>
  );
}
