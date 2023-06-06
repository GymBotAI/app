import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function LoginBox({ onLogin, onCreateAccount, onContinueAsGuest }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login action
    onLogin(username, password);
  };

  const handleCreateAccount = () => {
    // Navigate to create account screen or perform create account action
    onCreateAccount();
  };

  const handleContinueAsGuest = () => {
    // Continue as guest action
    onContinueAsGuest();
  };

  return (
    <View
    styles={{
        padding:'10px',
    }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create Account" onPress={handleCreateAccount} />
      <Button title="Continue as Guest" onPress={handleContinueAsGuest} />
    </View>
  );
}
