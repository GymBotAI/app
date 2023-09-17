import {
  Animated,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";

import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import Modal from "react-native-modal";
import LoginBox from "./LoginBox";
import SignUpBox from "./SignUpBox";

const Slides = [
  {
    id: 1,
    img: require("../../../assets/caresoul2.webp"),
    img2: require("../../../assets/phone1.jpg"),
  },
  {
    id: 2,
    img: require("../../../assets/caresoul3.webp"),
    img2: require("../../../assets/phone2.jpg"),
  },
  {
    id: 3,
    img: require("../../../assets/caresoul1.jpeg"),
    img2: require("../../../assets/phone3.jpeg"),
  },
  {
    id: 4,
    img: require("../../../assets/caresoul4.webp"),
    img2: require("../../../assets/phone4.jpg"),
  },
];

const Slider = ({ navigation }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
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
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleGoBack = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <View>
      <Modal
        isVisible={showLogin}
        backdropOpacity={0.9}
        backdropColor="#1f1f1f"
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 35,
            right: 5,
            width: 40,
            zIndex: 1,
          }}
          onPress={handleGoBack}
        >
          <Feather name="x-circle" size={40} color="white" />
        </TouchableOpacity>

        <LoginBox navigation={navigation} setShowLogin={setShowLogin} />
      </Modal>

      <Modal
        isVisible={showSignUp}
        backdropOpacity={0.9}
        backdropColor="#1f1f1f"
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 35,
            right: 5,
            width: 40,
            zIndex: 1,
          }}
          onPress={handleGoBack}
        >
          <Feather name="x-circle" size={40} color="white" />
        </TouchableOpacity>

        <SignUpBox navigation={navigation} setShowSignUp={setShowSignUp} />
      </Modal>

      <View
        style={{
          position: "absolute",
          zIndex: "1",
          top: 50,
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.logoBorder}>
          <Image
            source={require("../../../assets/GymBotText.png")}
            style={styles.logo}
          />
        </View>
      </View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
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

      <TouchableOpacity
        style={styles.signup}
        onPress={() => {
          setShowSignUp(true);
        }}
      >
        <Text style={styles.signupText}>Sign Up for Free</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login}
        onPress={() => {
          setShowLogin(true);
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Pagination data={Slides} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 47.0838,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    fontFamily: "roboto-black",
  },
  logoBorder: {
    borderColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 220,
    height: 110,
    borderRadius: 50,
  },
  signup: {
    position: "absolute",
    bottom: 150,
    alignSelf: "center",
    width: "85%",
    backgroundColor: "#ddd",
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  signupText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  login: {
    position: "absolute",
    bottom: 80,
    alignSelf: "center",
    width: "85%",
    // backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddd",
    textAlign: "center",
  },
});
