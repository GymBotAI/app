import { StylesObject } from "$types/styles";

import { useRef, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Image } from "expo-image";
//------------ Components ------------//
// import Pagination from "./Pagination";
// import SlideItem from "./SlideItem";

//------------ Styles ------------//
// import { Box } from "./styles";

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { User } from "@supabase/supabase-js";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Modal from "react-native-modal";

import { login, signup } from "$api/auth";

import googleImage from "$assets/google.webp";
import gymBotLogo from "$assets/logo-text.png";
import { colors } from "$styles";

import Button from "$components/Button";
import Icon from "$components/Icon";

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
      <LoginModal
        isVisible={showLogin}
        onAccount={() => {
          router.push("Main");
          setShowLogin(false);
        }}
        onClose={handleGoBack}
        type={true} // Login
      />

      <LoginModal
        isVisible={showSignUp}
        onAccount={() => {
          router.push("SignUp");
          setShowSignUp(false);
        }}
        onClose={handleGoBack}
        type={false} // SignUp
      />

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

function LoginModal({
  isVisible,
  type,

  onAccount,
  onClose,
  onError,
}: {
  isVisible: boolean;

  onAccount: (user: User) => void;
  onClose: () => void;
  onError?: (error: Error) => void;

  /**
   * True if login, false if signup
   */
  type: boolean;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorHandler =
    onError ||
    ((error) => {
      Alert.alert(`Error ${type ? "logging in" : "signing up"}`, error.message);
    });

  const handleLogin = async () => {
    const loginResult = await login(email, password);

    if (loginResult.success) {
      onAccount(loginResult.user);
    } else if ("error" in loginResult) {
      errorHandler(loginResult.error);
    } else {
      errorHandler(
        new Error("Unreachable in LoginBox handleLogin, no success or error"),
      );
    }
  };

  const handleSignup = async () => {
    const loginResult = await signup(email, password);

    if (loginResult.success) {
      onAccount(loginResult.user);
    } else if ("error" in loginResult) {
      errorHandler(loginResult.error);
    } else {
      errorHandler(
        new Error("Unreachable in SignupBox handleSignup, no success or error"),
      );
    }
  };

  const handleAction = type ? handleLogin : handleSignup;

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.9}
      backdropColor={colors.black.lighter}
    >
      <TouchableOpacity style={loginModalStyles.closeButton} onPress={onClose}>
        <Icon name="x-circle" size={32} color={colors.white.default} />
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={loginModalStyles.container}
      >
        <TextInput
          style={loginModalStyles.input}
          placeholder="Email"
          placeholderTextColor={colors.white.default}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={loginModalStyles.input}
          placeholder="Password"
          placeholderTextColor={colors.white.default}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={loginModalStyles.forgotPasswordText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View style={loginModalStyles.buttonsContainer}>
          <Button
            text={type ? "Login" : "Signup"}
            variant="white-primary"
            onPress={handleAction}
            style={[loginModalStyles.button, loginModalStyles.primaryButton]}
          />
          {/* <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: colors.black.lighter,
                textAlign: "center",
              }}
            >
              {type ? "Login" : "Signup"}
            </Text>
          </TouchableOpacity> */}

          <Button
            text={`${type ? "Signup" : "Login"} instead`}
            variant="white-secondary"
            size="small"
            style={loginModalStyles.button}
          />
          {/* <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: colors.grey.lighter,
                textAlign: "center",
              }}
            >
              {type ? "Signup" : "Login"} instead
            </Text>
          </TouchableOpacity> */}
        </View>

        <TouchableOpacity
          style={{
            marginTop: 60,
            alignSelf: "center",
            width: "90%",
            backgroundColor: colors.white.default, // Google's color
            borderRadius: 3,
            marginHorizontal: 10,
            marginBottom: 20,
            shadowColor: colors.black.default,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3, // For Android shadow
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <Image
              source={googleImage}
              style={{
                width: 45, // Adjust the width as needed
                height: 45, // Adjust the height as needed
                margin: -10,
              }}
            />
            <Text
              style={{
                marginLeft: 15,
                fontSize: 18,
                fontWeight: "bold",
                color: colors.black.default,
              }}
            >
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const loginModalBaseLoginSignupButton: StylesObject = {
  alignSelf: "center",
  width: "95%",
  paddingVertical: 10,
  borderRadius: 8,
  shadowColor: colors.black.default,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 4,
  elevation: 5, // For Android shadow
  color: colors.black.lighter,
};

const loginModalStyles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 35,
    right: 5,
    width: 40,
    zIndex: 1,
  },
  container: {
    paddingTop: 50,
    height: "100%",
    padding: 8,
    justifyContent: "center",
  },
  input: {
    marginBottom: 22,
    padding: 10,
    paddingRight: 0,
    paddingLeft: 3,
    borderBottomWidth: 2,
    borderBottomColor: colors.white.default,
    color: colors.white.default,
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: "auto",
  },
  buttonsContainer: {
    marginTop: 30,
    alignContent: "center",
    marginLeft: -10,
    display: "flex",
    flexDirection: "column",
  },
  button: { alignSelf: "center" },
  primaryButton: {
    marginBottom: 40,
  },
});
