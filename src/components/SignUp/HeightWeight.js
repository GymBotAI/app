import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, Keyboard } from "react-native";

import * as Device from "expo-device";

export let nameValue = ""; // Export the nameValue variable

export default function Name({ onChange }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("")
  const [showWeight, setShowWeight] = useState(false)
  const [showHeight, setShowHeight] = useState(false)

  const handleHeightChange = (text) => {
    setHeight(text);
    setShowHeight(text !== "");
    onChange(showWeight && showHeight); // Update the parent component with input status
    nameValue = text;
  };

  const handleWeightChange = (text) => {
    setWeight(text);
    setShowWeight(text !== "");
    onChange(showWeight && showHeight); // Update the parent component with input status
    nameValue = text;
  };
  return (
    <View style={{ flexGrow: 1, overflow: "auto" }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "black",
          marginTop: 20,
          fontSize: 18,
          borderBottomWidth: 2,
          paddingVertical: 5,
          paddingHorizontal: 2,
          marginHorizontal: 10,
        }}
        placeholder="Weight"
        value={weight}
        keyboardType="phone-pad"
        onChangeText={handleWeightChange}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "black",
          marginTop: 20,
          fontSize: 18,
          borderBottomWidth: 2,
          paddingVertical: 5,
          paddingHorizontal: 2,
          marginHorizontal: 10,
        }}
        placeholder="Height"
        value={height}
        keyboardType="phone-pad"
        onChangeText={handleHeightChange}
      />
    </View>
  );
}
