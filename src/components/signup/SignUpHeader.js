import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import Svg, { Path } from "react-native-svg";

export default function SignUpHeader({ text, minitext }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../../../assets/fonts/Roboto-Black.ttf"),
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
        paddingBottom: 40,
        width: "100%",
        display: "flex",
        zIndex: 1,
      }}
    >
      <View style={{ backgroundColor: "#1260de", height: 110 }}>
        <View
          style={{
            paddingTop: 50,
            paddingBottom: 8,
            backgroundColor: "#81cce6",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../../../assets/icon.jpg")}
            style={{
              width: 65, // Adjust the size as needed
              height: 65, // Adjust the size as needed
              borderRadius: 40,
              borderColor: '#1a2f36',
              borderWidth: 2,
              marginLeft: -50,
              marginRight: 10, // Add this line to set the desired spacing between the image and text
            }}
          />
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                color: "#1a2f36",
                fontFamily: "custom-font",
                letterSpacing: 1.5,
                marginBottom: -5,
                marginLeft: 5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5, // For Android shadow
              }}
              
            >
              {minitext}
            </Text>

            <Text
              style={{
                fontSize: 48,
                color: "#1a2f36",
                fontFamily: "custom-font",
                fontWeight: "bold",
                letterSpacing: 1.5,
                textAlign: "center",
                marginBottom: -5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5, // For Android shadow
              }}
            >
              {text}
            </Text>
          </View>
        </View>

        <Svg
          style={{
            marginTop: -15,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <Path
            fill="#81cce6"
            fill-opacity="1"
            d="M0,0L48,32C96,64,192,128,288,149.3C384,171,480,149,576,154.7C672,160,768,192,864,181.3C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}