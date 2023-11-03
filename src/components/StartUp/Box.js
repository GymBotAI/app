import { useRef, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";

//------------ Components ------------//
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import Modal from "react-native-modal";
import LoginBox from "./Login";
import SignupBox from "./SignUp";

//------------ Styles ------------//
import { Box, bVal } from "./.styles"

const backgroundImages = [
  {
    img: require("../../../assets/caresoul2.webp"),
    img2: require("../../../assets/phone1.jpg"),
  },
  {
    img: require("../../../assets/caresoul3.webp"),
    img2: require("../../../assets/phone2.jpg"),
  },
  {
    img: require("../../../assets/caresoul1.jpeg"),
    img2: require("../../../assets/phone3.jpeg"),
  },
  {
    img: require("../../../assets/caresoul4.webp"),
    img2: require("../../../assets/phone4.jpg"),
  },
];

let xButton = null;

export default function StartUpBox ({ navigation }) {
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

  xButton = (
    <TouchableOpacity style={Box.touchable} onPress={handleGoBack}>
    <Feather name="x-circle" size={bVal.buttonSize} color={bVal.buttonColor} />
    </TouchableOpacity>
  )

  return (
    <>
      <Modal style={Box.modalContainer}
      isVisible={showLogin} backdropOpacity={bVal.backOpacity} backdropColor={bVal.backColor}>
        {xButton}
        <LoginBox
          onLogin={() => {
            navigation.navigate("Home");
            setShowLogin(false);
          }}
          onError={(error) => {
            Alert.alert("Error logging in", error.message);
          }}
          onCreateAccount={() => {
            navigation.navigate("Register");
          }}
        />
      </Modal>

      <Modal isVisible={showSignUp} backdropOpacity={bVal.backOpacity} backdropColor={bVal.backColor}>
        {xButton}
        <SignupBox
          onSignup={() => {
            navigation.navigate("Home");
            setShowSignUp(false);
          }}
          onError={(error) => {
            Alert.alert("Error signing up", error.message);
          }}
        />
      </Modal>

      <View style={Box.logoView}>
        <Image source={bVal.gymBotLogo} style={Box.logo}/>
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
          backgroundColor: "white",
          padding: 10,
          borderRadius: 2,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Skip to Home Screen (for devs)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Box.signUp}
        onPress={() => {
          setShowSignUp(true);
        }}
      >
        <Text style={Box.signupText}>Sign Up for Free</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Box.login}
        onPress={() => {
          setShowLogin(true);
        }}
      >
        <Text style={Box.loginText}>Login</Text>
      </TouchableOpacity>

      <Pagination items={backgroundImages} scrollX={scrollX} />
    </>
  );
};
