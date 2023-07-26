import React, { useState, useRef, useEffect } from "react";
import {
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import * as Device from "expo-device";

import HeightWeight from "./HeightWeight";

export let weightVal = ""; // Initialize ageValue as an empty string
export let wUnit = "";
export let heightVal = ""; // Initialize ageValue as an empty string
export let hUnit = "";

export default function HeightWeightContainer({ onChange }) {

//   useEffect(() => {
//     console.log(showHeight);
//     console.log(showWeight);
//     onChange(showHeight && showWeight);
//   }, [showHeight]);

  return (
    <View style={{ flexGrow: 1, overflow: "auto" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >

      <HeightWeight onChange={onChange}/>

      </View>
    </View>
  );
}