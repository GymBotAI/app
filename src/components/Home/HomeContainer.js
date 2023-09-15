import React, {useState} from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import WorkoutStats from "./WorkoutStats"; // Import the new component
import WorkoutList from "./WorkoutList";
import WorkoutPreview from './WorkoutPreview'

import {nameValue} from "../SignUp/Name"
import { emailValue } from "../Login/LoginBox"

export let nameSetting = "";
export let ageSetting = "";
export let weightSetting = "";
export let heightSetting = "";
export let genderSetting = "";


const HomeScreen = ( {navigation} ) => {

  const getDetails = async (emailVal) => {
    try {
      navigation.navigate("Settings")
      const response = await fetch("http://openhost.ddns.net:3000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "USERNAME": String(emailVal),
        }),
      });
      const data = await response.json();
      nameSetting = data[0].NAME;
      ageSetting = data[0].AGE;
      genderSetting = data[0].GENDER;
      weightSetting = data[0].WEIGHT;
      heightSetting = data[0].HEIGHT;
      navigation.navigate("Settings")
      //return data;
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
  }
}

  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.greetingText}>Hello, {nameValue}</Text>
        <TouchableOpacity onPress={() => getDetails(emailValue)}>
          <FontAwesome5 name="cog" size={28} color="#333" />
          {/* <Image source={require("../../../assets/GymBotLogo.jpg")} style={{
    width: 50, height: 50, borderRadius: 22}}/> */}

        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30, marginBottom: -10, width: "90%", alignSelf: "center" }}>
        <WorkoutStats
          completedWorkouts={20}
          totalWorkouts={30}
          goalPercentage={66}
        />

      </View>
      {/* <TalkToGymBotSection navigation={navigation}/> */}

      <WorkoutPreview/>
      
      <WorkoutList navigation={navigation}/>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
