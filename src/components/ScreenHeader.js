import { Image, TouchableOpacity, Text, View } from "react-native";
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
          display: 'flex',
          flexDirection: 'row',
          
        }}>
      
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          paddingBottom: 12,
        }}
      >
        <Image
          source={require("../../assets/navbar.png")}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 56,
          color: "black",
          fontFamily: "custom-font",
          letterSpacing: 1.5,
          flexBasis: 'flexEnd',
        }}
      >
        {text}
      </Text>

    </View>
  );
}
