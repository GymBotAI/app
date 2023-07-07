import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import Svg, { Path } from "react-native-svg";

export default function MainHeader({ text, minitext }) {
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
        paddingBottom: 40,
        width: "100%",
        display: "flex",
        zIndex: 1,
      shadowColor: "black",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      }}
    >
      <View style={{ backgroundColor: "#60b8d6", height: 110 }}>
        <View
          style={{
            paddingTop: 50,
            paddingBottom: 8,
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
            source={require("../../assets/icon.jpg")}
            style={{
              width: 65, // Adjust the size as needed
              height: 65, // Adjust the size as needed
              borderRadius: 20,
              marginLeft: -50,
              marginRight: 10, // Add this line to set the desired spacing between the image and text
            }}
          />
          <View style={{}}>
            <Text
              style={{
                fontSize: 48,
                color: "#e0e0e0",
                fontFamily: "custom-font",
                fontWeight: "bold",
                letterSpacing: 1.5,
                textAlign: "center",
                marginBottom: 0,
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
            marginTop: -40,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <Path
            fill="#60b8d6"
            fill-opacity="1"
            d="M0,288L40,250.7C80,213,160,139,240,138.7C320,139,400,213,480,213.3C560,213,640,139,720,138.7C800,139,880,213,960,218.7C1040,224,1120,160,1200,138.7C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}
