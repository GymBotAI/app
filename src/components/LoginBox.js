import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

import LoginButton from "./LoginButton";

export default function LoginBox({ onLogin, onCreateAccount, onContinueAsGuest, navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate('Home');
    // Perform login action
    // onLogin(username, password);
  };

  const handleCreateAccount = () => {
    navigation.navigate('Home');
    // Navigate to create account screen or perform create account action
    // onCreateAccount();
  };

  const handleContinueAsGuest = () => {
    navigation.navigate('Home');
    // Continue as guest action
    // onContinueAsGuest();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.login} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

    {/* Dark gray line */}
    <View
        style={{
          position: "absolute",
          top: 300,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: "white",
        }}
      />

      <LoginButton
        text="New to GymBot?"
        question="Create Account"
        navigation={navigation}
      />
      
      <LoginButton
      text="Just visiting?"
      question="Continue as Guest"
      navigation={navigation}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    width: "100%",
    backgroundColor: "#ddd",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 20,
    marginTop: 10,
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
});
