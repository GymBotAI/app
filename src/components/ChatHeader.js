import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import Svg, { Path } from 'react-native-svg';

export default function WavyHeader({ text, minitext }) {
  
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
        // paddingTop: 40,
        paddingBottom: 35,
        width: "100%",
        display: "flex",
        zIndex: 1,
      }}
    >
      <View style={{ backgroundColor: '#1260de', height: 110 }}>
      <View
      style={{
        paddingTop: 50,
        paddingBottom: 8,
        backgroundColor: "#1260de",
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
        <View style={{

        }}>  

          <Text style={{
              fontSize: 14,
              color: "#e0e0e0",
              fontFamily: "custom-font",
              letterSpacing: 1.5,
              marginBottom: -5,
          }}>
            {minitext}
          </Text>
          
          <Text
            style={{
              fontSize: 48,
              color: "#e0e0e0",
              fontFamily: "custom-font",
              fontWeight: "bold",
              letterSpacing: 1.5,
              textAlign: "center",
              marginBottom: -5,
            }}
          >
            {text}
          </Text>

        </View>
    </View>


        <Svg style={{
          marginTop: -40,
        }}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <Path fill="#1260de" fill-opacity="1" d="M0,288L40,250.7C80,213,160,139,240,138.7C320,139,400,213,480,213.3C560,213,640,139,720,138.7C800,139,880,213,960,218.7C1040,224,1120,160,1200,138.7C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">

          </Path>

        </Svg>
      </View>
    </View>
    
  );
}



// export default function ScreenHeader({ text, onOpenNavbar }) {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   useEffect(() => {
//     async function loadFont() {
//       await Font.loadAsync({
//         "custom-font": require("../../assets/fonts/Roboto-Black.ttf"),
//       });

//       setFontLoaded(true);
//     }

//     loadFont();
//   }, []);

//   if (!fontLoaded) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View
//       style={{
//         paddingTop: 40,
//         paddingBottom: 8,
//         backgroundColor: "#1260de",
//         width: "100%",
//         display: "flex",
//         flexDirection: "row",
//         zIndex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         borderBottomLeftRadius: 40, // Adjust the value as needed
//         borderBottomRightRadius: 40, // Adjust the value as needed
//         overflow: "hidden",
//       }}
//     >
//       <Text
//         style={{
//           fontSize: 48,
//           color: "#e0e0e0",
//           fontFamily: "custom-font",
//           fontWeight: "bold",
//           letterSpacing: 1.5,
//           textAlign: "center",
//         }}
//       >
//         {text}
//       </Text>
//       <Image
//         source={require("../../assets/circleicon.png")}
//         style={{
//           width: 50, // Adjust the size as needed
//           height: 50, // Adjust the size as needed
//           marginLeft: 10, // Add this line to set the desired spacing between the image and text
//         }}
//       />
//     </View>
//   );
// }