import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LoginBox({ onLogin, onCreateAccount, onContinueAsGuest, navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate('Chat');
    // Perform login action
    // onLogin(username, password);
  };

  const handleCreateAccount = () => {
    navigation.navigate('SignUp');
    // Navigate to create account screen or perform create account action
    // onCreateAccount();
  };

  const handleContinueAsGuest = () => {
    navigation.navigate('Chat');
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
      
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      
      <View style={{
        marginTop: 30,
        alignContent: 'center',
        marginLeft: -10,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signup} onPress={handleCreateAccount}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>

      </View>

    <View style={styles.guestContainer}>
      <Text style={styles.guestText}>Just Visiting?</Text>
      <TouchableOpacity style={styles.button} onPress={handleContinueAsGuest}>
        <Text style={styles.forgotText}>Continue as Guest</Text>
      </TouchableOpacity>
    </View>

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
    // backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
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
    marginLeft: 'auto',
  },
  guestContainer: {
    display:'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  guestText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    marginLeft: 10,
  }
});
