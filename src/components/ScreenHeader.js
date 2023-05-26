import { Text } from "react-native";
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';



export default function ScreenHeader({ text }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
      'custom-font': require('../../assets/fonts/impwrench.ttf'),
    });
    
      setFontLoaded(true);
    }
    
    loadFont();
    }, []);
    
    if (!fontLoaded) {
    return <Text>Loading...</Text>;
    }

  return (
    <Text
      style={{
        fontSize: 56,
        paddingTop: 40,
        paddingBottom: 5,
        color: "black",
        fontFamily: "custom-font",
        // fontWeight: 'bold',
        letterSpacing: 1.5,
        backgroundColor: "white",
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
        zIndex: 2,
      }}
    >
      {text}
    </Text>
  );
}
