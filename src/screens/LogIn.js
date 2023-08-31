import {
    ImageBackground,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
  } from "react-native";
  // import { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";

import LoginBox from "../components/Login/LoginBox";
import LoginHeader from "../components/Login/LoginHeader";

export default function Login({ navigation }) {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ImageBackground
          source={require("../../assets/accountbgdark.jpg")}
          resizeMode="cover"
          style={{
    height: '100%',
    width: '100%',
    flex: 1,
          }}
        >
      <LinearGradient
    colors={[
      'rgba(0,0,255,0.75)',
      'rgba(0,0,0,0.75)',
    ]}
    style={{flex: 1, justifyContent: 'center'}}>

        <View style={{ position: "absolute", top: 40, left: 0, right: 0 }}>
          <LoginHeader navigation={navigation}/>
        </View>

        <View
          style={{
            marginTop: 220,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <LoginBox navigation={navigation} />
          </View>

        <StatusBar barStyle="light-content" />
      </LinearGradient>
        </ImageBackground>
        
    </TouchableWithoutFeedback>
  );
}