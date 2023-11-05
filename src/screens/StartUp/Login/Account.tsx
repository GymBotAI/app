import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard, // Import Keyboard
} from "react-native";
import { Image } from "expo-image";

import { Login, aVal } from "./styles";
import { login } from "../../../api/auth";
import { signup } from "../../../api/auth";

import type { User } from "@supabase/supabase-js";

export default function LoginBox({
  onAccount,
  onError,
  button1,
  button2,
  type,
}: {
  onAccount: (user: User) => void;
  onError: (error: Error) => void;
  button1: string;
  button2: string;
  type: boolean;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const loginResult = await login(email, password);

    if (loginResult.success) {
      onAccount(loginResult.user);
    } else if ("error" in loginResult) {
      onError(loginResult.error);
    } else {
      onError(
        new Error("Unreachable in LoginBox handleLogin, no success or error")
      );
    }
  };

  const handleSignup = async () => {
    const loginResult = await signup(email, password);

    if (loginResult.success) {
      onAccount(loginResult.user);
    } else if ("error" in loginResult) {
      onError(loginResult.error);
    } else {
      onError(
        new Error("Unreachable in SignupBox handleSignup, no success or error")
      );
    }
  };

  const handleAction = type ? handleLogin : handleSignup; //handleLogin if true, handleSignUp if false

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={Login.container}>
        <TextInput
          style={Login.input}
          placeholder="Email"
          placeholderTextColor={aVal.placeholder}
          value={email}
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
            <Text style={styles.loginText}>{button1}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signup}>
            <Text style={styles.signupText}>{button2}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInWithGoogleButton}>
          <View style={styles.googleButtonContent}>
            <Image
              source={require("../../../../assets/google.webp")}
              style={styles.googleLogo}
            />
            <Text style={styles.signInWithGoogleButtonText}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {},
  login: {
    alignSelf: "center",
    width: "95%",
    backgroundColor: "magenta",
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
    color: "magenta",
    textAlign: "center",
  },
  signup: {
    alignSelf: "center",
    width: "95%",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "magenta",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  signupText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "magenta",
    textAlign: "center",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "magenta",
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
    shadowColor: "magenta",
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
