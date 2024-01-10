import { useRef, useState } from "react";
import { Animated, FlatList, Text, TouchableOpacity, View } from "react-native";

//------------ Components ------------//
// import LoginModal from "./LoginModal";
// import Pagination from "./Pagination";
// import SlideItem from "./SlideItem";

//------------ Styles ------------//
// import { Box } from "./styles";

import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";

import gymBotLogo from "$assets/logo-text.png";
import { colors } from "$styles";

import Button from "$components/Button";

const backgroundImages = [
  {
    img: require("$assets/caresoul2.webp"),
    img2: require("$assets/phone1.jpg"),
  },
  {
    img: require("$assets/caresoul3.webp"),
    img2: require("$assets/phone2.jpg"),
  },
  {
    img: require("$assets/caresoul1.jpeg"),
    img2: require("$assets/phone3.jpeg"),
  },
  {
    img: require("$assets/caresoul4.webp"),
    img2: require("$assets/phone4.jpg"),
  },
];

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleGoBack = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <View>
      {/* <LoginModal
        isVisible={showLogin}
        onAccount={() => {
          navigation.navigate("Main");
          setShowLogin(false);
        }}
        onClose={handleGoBack}
        type={true} // Login
      />

      <LoginModal
        isVisible={showSignUp}
        onAccount={() => {
          navigation.navigate("SignUp");
          setShowSignUp(false);
        }}
        onClose={handleGoBack}
        type={false} // SignUp
      /> */}

      {/* <View style={Box.logoView}>
        <Image source={gymBotLogo} style={Box.logo} />
      </View> */}

      {/* <FlatList
        data={backgroundImages}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          )(event);
        }}
        viewabilityConfig={viewabilityConfig}
        bounces={false}
      /> */}

      <Button
        href="/home"
        text="Skip to Main Screen (for devs)"
        style={{
          position: "absolute",
          top: 400,
          alignSelf: "center",
          backgroundColor: colors.white.default,
        }}
      />

      <Button
        onPress={() => {
          setShowSignUp(true);
        }}
        text="Sign Up for Free"
      />

      <Button
        onPress={() => {
          setShowLogin(true);
        }}
        text="Login"
      />

      {/* <Pagination items={backgroundImages} scrollX={scrollX} /> */}

      <StatusBar style="light" />
    </View>
  );
}
