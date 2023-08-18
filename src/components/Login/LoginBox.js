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

var pass = "";

export default function LoginBox({ navigation }) {
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

  const checkCredentials = () => {
    fetch("http://openhost.ddns.net:3000/select",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "USERNAME": {username},
        "PASSWORD": {password}
      }) 
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.USERNAME)
      pass = data.PASSWORD
    })
    if(pass === password) {
      navigation.navigate("Home");
    } else {
      //say wrong password
      console.log(pass)
    } //it doesnt work yet
  }

  const handleLogin = () => {
    // onPressInsert()
    // checkCredentials()
    navigation.navigate("Home");
  };

  const handleCreateAccount = () => {
    navigation.navigate("SignUp");
  };

  const handleContinueAsGuest = () => {
    navigation.navigate("Signup");
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
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.signInWithGoogleButton}>
        <View style={styles.googleButtonContent}>
          <Image source={require("../../../assets/google.webp")} style={styles.googleLogo} />
          <Text style={styles.signInWithGoogleButtonText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>

      {/* <View style={styles.guestContainer}>
        <Text style={styles.guestText}>Just Visiting?</Text>
        <TouchableOpacity style={styles.button} onPress={handleContinueAsGuest}>
          <Text style={styles.forgotText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View> */}
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
    borderRadius: 28,
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  googleLogo: {
    width: 45, // Adjust the width as needed
    height: 45, // Adjust the height as needed
    margin: -10,
  },
  signInWithGoogleButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
