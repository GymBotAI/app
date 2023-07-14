import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, Keyboard, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import * as Device from "expo-device";

export let nameValue = ""; // Export the nameValue variable

export default function HeightWeight({ onChange }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [showWeight, setShowWeight] = useState(false);
  const [showHeight, setShowHeight] = useState(false);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");

  const handleHeightChange = (text) => {
    setHeight(text);
    setShowHeight(text !== "");
    onChange(showWeight && showHeight); // Update the parent component with input status
    heightValue = text;
  };

  const handleWeightChange = (text) => {
    setWeight(text);
    setShowWeight(text !== "");
    onChange(showWeight && showHeight); // Update the parent component with input status
    weightValue = text;
  };

  const toggleWeightUnit = () => {
    setWeightUnit(weightUnit === "kg" ? "lb" : "kg");
  };

  const toggleHeightUnit = () => {
    setHeightUnit(heightUnit === "cm" ? "in" : "cm");
  };

  const handleHeightBlur = () => {
    if (height !== "" && height.length != 4) {
        setHeight(height + ".0");
    }
  };

  const handleWeightBlur = () => {
    if (weight !== "" && weight.length != 4 && weight.indexOf('.') === -1) {
      setWeight(weight + ".0");
    }
  };

  return (
    <View style={{ flexGrow: 1, overflow: "auto" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{
            width: "25%",
            height: 40,
            borderColor: "black",
            marginTop: 40,
            fontSize: 18,
            borderBottomWidth: 2,
            paddingHorizontal: 2,
            marginHorizontal: 30,
            paddingLeft: 5,
          }}
          value={weight}
          keyboardType="decimal-pad"
          onChangeText={handleWeightChange}
          onBlur={handleWeightBlur}
          maxLength={4}
        />
        <TouchableOpacity onPress={toggleWeightUnit} style={{ position: 'absolute', top: 29, left: 72, padding: 20,}}>
          <Text style={{fontSize: 18, color: "#bababa"}}>
            {weightUnit === "kg" ? "kg" : "lb"}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            width: "25%",
            height: 40,
            borderColor: "black",
            marginTop: 40,
            fontSize: 18,
            borderBottomWidth: 2,
            paddingBottom: -2,
            paddingHorizontal: 2,
            marginHorizontal: 30,
            paddingLeft: 5,
          }}
          value={height}
          keyboardType="decimal-pad"
          onChangeText={handleHeightChange}
          onBlur={handleHeightBlur}
          maxLength={4}
        />
        <TouchableOpacity onPress={toggleHeightUnit} style={{ position: 'absolute', top: 30, right: 10, padding: 20,}}>
          <Text style={{fontSize: 18, color: "#bababa"}}>
            {heightUnit === "cm" ? "cm" : "in"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
