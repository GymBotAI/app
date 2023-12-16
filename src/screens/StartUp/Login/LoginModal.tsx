import type { User } from "@supabase/supabase-js";

import { useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { login, signup } from "$api/auth";

import googleImage from "$assets/google.webp";
import { colors } from "$styles";

import { aVal, Box, bVal, Login } from "./styles";

import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import Modal from "react-native-modal";

export default function LoginBox({
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
        new Error("Unreachable in LoginBox handleLogin, no success or error")
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
        new Error("Unreachable in SignupBox handleSignup, no success or error")
      );
    }
  };

  const handleAction = type ? handleLogin : handleSignup; //handleLogin if true, handleSignUp if false

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={bVal.backOpacity}
      backdropColor={bVal.backColor}
    >
      <TouchableOpacity style={Box.touchable} onPress={onClose}>
        <Feather
          name="x-circle"
          size={bVal.buttonSize}
          color={bVal.buttonColor}
        />
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Login.container}>
          <TextInput
            style={Login.input}
            placeholder="Email"
            placeholderTextColor={aVal.placeholder}
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            style={Login.input}
            placeholder="Password"
            placeholderTextColor={aVal.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 30,
              alignContent: "center",
              marginLeft: -10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TouchableOpacity style={styles.login} onPress={handleAction}>
              <Text style={styles.loginText}>{type ? "Login" : "Signup"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signup}>
              <Text style={styles.signupText}>
                {type ? "Signup instead" : "Login instead"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signInWithGoogleButton}>
            <View style={styles.googleButtonContent}>
              <Image source={googleImage} style={styles.googleLogo} />
              <Text style={styles.signInWithGoogleButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {},
  login: {
    alignSelf: "center",
    width: "95%",
    backgroundColor: colors.grey.lightest,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 40,
    marginTop: 25,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black.lighter,
    textAlign: "center",
  },
  signup: {
    alignSelf: "center",
    width: "95%",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.grey.lighter,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  signupText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.grey.lighter,
    textAlign: "center",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: "auto",
  },
  guestContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
  },
  guestText: {
    fontSize: 16,
    color: colors.white.default,
  },
  button: {
    marginLeft: 10,
  },
  signInWithGoogleButton: {
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
  },
  googleButtonContent: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  googleLogo: {
    width: 45, // Adjust the width as needed
    height: 45, // Adjust the height as needed
    margin: -10,
  },
  signInWithGoogleButtonText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black.default,
  },
  backButton: {
    position: "absolute",
    top: 20, // Adjust the position as needed
    left: 10, // Adjust the position as needed
    zIndex: 1,
  },

  backButtonText: {
    color: colors.white.default,
    fontSize: 16,
  },
});
