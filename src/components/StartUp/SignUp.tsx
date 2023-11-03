import { useState } from "react";
import {
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { Image } from "expo-image";

import { signup } from "../../api/auth";

import type { User } from "@supabase/supabase-js";

export default function SignupBox({
  onSignup,
  onError,
}: {
  onSignup: (user: User) => void;
  onError: (error: Error) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const loginResult = await signup(email, password);

    if (loginResult.success) {
      onSignup(loginResult.user);
    } else if ("error" in loginResult) {
      onError(loginResult.error);
    } else {
      onError(
        new Error("Unreachable in SignupBox handleSignup, no success or error")
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
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
        <TouchableOpacity style={styles.login} onPress={handleSignup}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signup}>
          <Text style={styles.signupText}>Log In Instead</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInWithGoogleButton}>
        <View style={styles.googleButtonContent}>
          <Image
            source={require("../../../assets/google.webp")}
            style={styles.googleLogo}
          />
          <Text style={styles.signInWithGoogleButtonText}>
            Sign Up with Google
          </Text>
        </View>
      </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 5,
    justifyContent: "center",
    marginLeft: "2.5%",
  },
  input: {
    marginBottom: 22,
    padding: 10,
    paddingRight: 0,
    paddingLeft: 3,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    color: "white",
    fontSize: 16,
  },
  login: {
    alignSelf: "center",
    width: "95%",
    backgroundColor: "#ddd",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 40,
    marginTop: 25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  signup: {
    alignSelf: "center",
    width: "95%",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  signupText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddd",
    textAlign: "center",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ddd",
    marginLeft: "auto",
  },
  guestContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
  },
  guestText: {
    fontSize: 16,
    color: "white",
  },
  button: {
    marginLeft: 10,
  },
  signInWithGoogleButton: {
    marginTop: 60,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "white", // Google's color
    borderRadius: 3,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: "#000",
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
    color: "black",
  },
  backButton: {
    position: "absolute",
    top: 20, // Adjust the position as needed
    left: 10, // Adjust the position as needed
    zIndex: 1,
  },

  backButtonText: {
    color: "white",
    fontSize: 16,
  },
});
