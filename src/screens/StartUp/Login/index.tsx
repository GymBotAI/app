import type { NavigationProp } from "$types/navigation";

import { useContext, useRef, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AppContext } from "$context";

import { colors } from "$styles";

import Account from "./Account";
import Pagination from "./Pagination";
//------------ Components ------------//
import SlideItem from "./SlideItem";
//------------ Styles ------------//
import { Box, bVal } from "./styles";

import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import Modal from "react-native-modal";

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

let xButton = null;

export default function StartUp({
  navigation,
}: {
  navigation: NavigationProp;
}) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;

  const { session } = useContext(AppContext);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleGoBack = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  xButton = (
    <TouchableOpacity style={Box.touchable} onPress={handleGoBack}>
      <Feather
        name="x-circle"
        size={bVal.buttonSize}
        color={bVal.buttonColor}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={showLogin}
        backdropOpacity={bVal.backOpacity}
        backdropColor={bVal.backColor}
      >
        {xButton}
        <Account
          onAccount={() => {
            navigation.navigate("Main");
            setShowLogin(false);
          }}
          onError={(error) => {
            Alert.alert("Error logging in", error.message);
          }}
          button1="Login"
          button2="Sign Up Instead"
          type={true} //Identifies it as a Login
        />
      </Modal>

      <Modal
        isVisible={showSignUp}
        backdropOpacity={bVal.backOpacity}
        backdropColor={bVal.backColor}
      >
        {xButton}
        <Account
          onAccount={() => {
            navigation.navigate("Main");
            setShowSignUp(false);
          }}
          onError={(error) => {
            Alert.alert("Error signing up", error.message);
          }}
          button1="Sign Up"
          button2="Login Instead"
          type={false} //Identifies it as a SignUp
        />
      </Modal>

      <View style={Box.logoView}>
        <Image source={bVal.gymBotLogo} style={Box.logo} />
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
