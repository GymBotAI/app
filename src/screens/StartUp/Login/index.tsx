import type { NavigationProp } from "$types/navigation";

import { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import gymBotLogo from "$assets/GymBotText.png";
import { colors } from "$styles";

//------------ Components ------------//
import LoginModal from "./LoginModal";
import Pagination from "./Pagination";
import SlideItem from "./SlideItem";
//------------ Styles ------------//
import { Box } from "./styles";

import { Image } from "expo-image";

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

export default function StartUp({
  navigation,
}: {
  navigation: NavigationProp;
}) {
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
      <LoginModal
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
      />

      <View style={Box.logoView}>
        <Image source={gymBotLogo} style={Box.logo} />
      </View>

      <FlatList
        data={backgroundImages}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
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
      />

      <TouchableOpacity
        style={{
          position: "absolute",
          top: 400,
          alignSelf: "center",
          backgroundColor: colors.white.default,
          padding: 10,
          borderRadius: 2,
        }}
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <Text>Skip to Main Screen (for devs)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Box.signUp}
        onPress={() => {
          setShowSignUp(true);
        }}
      >
        <Text style={Box.signupText}>Sign Up for Free</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Box.login}
        onPress={() => {
          setShowLogin(true);
        }}
      >
        <Text style={Box.loginText}>Login</Text>
      </TouchableOpacity>

      <Pagination items={backgroundImages} scrollX={scrollX} />

      <StatusBar barStyle="light-content" />
    </View>
  );
}
