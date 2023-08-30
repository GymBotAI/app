import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { useState, useEffect } from "react";
import Svg, { Path } from "react-native-svg";

export default function MainHeader({ text, minitext }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "roboto-black": require("../../assets/fonts/Roboto-Black.ttf"),
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
            backgroundColor: "#1877f2",
            paddingTop: '12%',
            paddingBottom: 20,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* <Image
            source={require("../../assets/GymBotLogo.png")}
            style={{
              width: 65, // Adjust the size as needed
              height: 65, // Adjust the size as needed
              borderRadius: 20,
              marginLeft: -40,
              marginRight: 20, // Add this line to set the desired spacing between the image and text
              borderWidth: 1,
            }}
          /> */}
          <View style={{}}>
            {/* <Text
              style={{
                fontSize: 19,
                color: "#e0e0e0",
                fontFamily: "roboto-black",
                letterSpacing: 1.5,
                marginBottom: -5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5, // For Android shadow
              }}
            >
              {minitext}
            </Text> */}

            
            <Image
                    source={require("../../assets/GymBotText.png")}
                    style={{width: 250, height: 125, borderRadius: 50, marginVertical: -25, marginBottom: -30}}
                />
          </View>

        </View>
  );
}
