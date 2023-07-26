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
    const [weight, setWeight] = useState("0")
    const [height, setHeight] = useState("0")
    const [weightUnit, setWeightUnit] = useState("kg")
    const [heightUnit, setHeightUnit] = useState("cm")

    const [showWeight, setShowWeight] = useState("")
    const [showHeight, setShowHeight] = useState("")

  useEffect(() => {
    console.log(showHeight);
    console.log(showWeight);
    onChange(showWeight);
  }, );

  return (
    <View style={{ flexGrow: 1, overflow: "auto" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >

      <HeightWeight onChange={onChange}
        value={weight} setValue={setWeight}
        unit={weightUnit} setUnit={setWeightUnit}
        setShow={setShowWeight}
        lower={30}
        upper={500}
      />

      </View>
    </View>
  );
}