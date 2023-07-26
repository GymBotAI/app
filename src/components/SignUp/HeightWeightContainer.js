import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
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
    onChange(showWeight && showHeight);
    weightVal = weight
    wUnit = weightUnit
    heightVal = height
    hUnit = heightUnit
  }, );

  const updateSettings = () => {
  }

  return (
    <View style={styles.container}>

    <View style={styles.left}>
      <HeightWeight onChange={onChange}
        value={weight} setValue={setWeight}
        unit={weightUnit} setUnit={setWeightUnit}
        setShow={setShowWeight}
        lower={30}
        upper={500}
        met="kg"
        imp="lb"
      />
    </View>

    <View style={styles.right}>
        <HeightWeight updateSettings={updateSettings}
        value={height} setValue={setHeight}
        unit={heightUnit} setUnit={setHeightUnit}
        setShow={setShowHeight}
        lower={100}
        upper={250}
        met="cm"
        imp="in"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      flexGrow: 1,
    },
    left: {
      flex: 1,
    },
    right: {
      flex: 1,
    },
  });