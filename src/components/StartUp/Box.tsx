import { useRef, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";

import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import Modal from "react-native-modal";
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox";

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

const Slider = ({ navigation }) => {
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

      <View
        style={{
          position: "absolute",
          zIndex: 1,
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

      <Pagination items={backgroundImages} scrollX={scrollX} />
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
