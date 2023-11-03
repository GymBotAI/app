import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import HeightWeight from "./HeightWeight";

import { minHeight } from "../styles";
import { maxHeight } from "../styles";
import { minWeight } from "../styles";
import { maxWeight } from "../styles";

export let weightVal = ""; // Initialize ageValue as an empty string
export let wUnit = "";
export let heightVal = ""; // Initialize ageValue as an empty string
export let hUnit = "";

export default function HeightWeightContainer({ onChange }) {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");

  const [showWeight, setShowWeight] = useState("");
  const [showHeight, setShowHeight] = useState("");

  useEffect(() => {
    console.log(showHeight);
    console.log(showWeight);
    onChange(showWeight && showHeight);
    weightVal = weight;
    wUnit = weightUnit;
    heightVal = height;
    hUnit = heightUnit;
  });

  const updateSettings = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <HeightWeight
          onChange={onChange}
          value={weight}
          setValue={setWeight}
          unit={weightUnit}
          setUnit={setWeightUnit}
          setShow={setShowWeight}
          lower={minWeight}
          upper={maxWeight}
          met="kg"
          imp="lb"
          conversion={2.20462262185}
        />
      </View>

      <View style={styles.right}>
        <HeightWeight
          updateSettings={updateSettings}
          value={height}
          setValue={setHeight}
          unit={heightUnit}
          setUnit={setHeightUnit}
          setShow={setShowHeight}
          lower={minHeight}
          upper={maxHeight}
          met="cm"
          imp="in"
          conversion={0.393701}
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
    marginRight: 5,
  },
  right: {
    flex: 1,
    marginLeft: 5,
  },
});
