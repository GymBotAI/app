import React, { useState } from "react";
import { View } from "react-native";

import Goals from "../GoalSelect";

export default function Name({ }) {
    const [name, setName] = useState("")

  return (
    <>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Goals text="Build Muscle"/>
          <Goals text="Lose Weight"/>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Goals text="Run Faster"/>
          <Goals text="Better Abs"/>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Goals text="Get Larger"/>
          <Goals text="Do a Pull Up"/>
        </View>
        <View style={{alignItems: 'center'}}>
        <Goals text="Other"/>
        </View>

    </>
  );
}