import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";


import handleInsert from "../../db";
import { username } from "../SignUp/Credentials";

var pass = "";

export let emailValue = "";

export default function LoginBox({ navigation, setShowLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressInsert = async () => {
    try {
      // You can call the handleInsert function here
      await handleInsert(email);
    } catch (error) {
      console.error('Error inserting record:', error);
    }
  };

  const checkCredentials = async (email, password) => {
    try {
      const response = await fetch("http://openhost.ddns.net:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "username": String(email),
          "password": String(password)
        }),
      });
  
      const data = await response.json();
      return data; // Return the response data
    } catch (error) {
      console.error("Error checking credentials:", error);
      return null; // Return null in case of an error
    }
  };
  
 
  const handleLogin = async () => {
    
    // onPressInsert()
    console.log(email)
    emailValue = email;
    console.log(password)
    console.log("Login result:")
    const result = await checkCredentials(email, password);
    console.log(result)
    if (result && result.message === "Login successful") { //for testing use One for email and Two for password
    setShowLogin(false)
      navigation.navigate("Home");
    } else if (result && result.message === "Invalid credentials") {
      console.log("Invalid login attempt")
    } else {
      console.log("Error")
    }
    //navigation.navigate("Home");
  };

  const handleCreateAccount = () => {
    navigation.navigate("SignUp");
    setShowLogin(false)
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
        autoCapitalize = 'none'
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
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signup} onPress={handleCreateAccount}>
          <Text style={styles.signupText}>Sign Up Instead</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.signInWithGoogleButton}>
        <View style={styles.googleButtonContent}>
          <Image source={require("../../../assets/google.webp")} style={styles.googleLogo} />
          <Text style={styles.signInWithGoogleButtonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 130,
    width: '95%',
    justifyContent:'center',
    marginLeft: '2.5%',
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
    position: 'absolute',
    top: 20, // Adjust the position as needed
    left: 10, // Adjust the position as needed
    zIndex: 1,
  },

  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
