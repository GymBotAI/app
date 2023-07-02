import React, { useState } from "react";
import { View } from "react-native";

import GoalSelect from "../GoalSelect";

export default function Goals({ }) {

  return (
    <>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <GoalSelect text="Build Muscle"/>
          <GoalSelect text="Lose Weight"/>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <GoalSelect text="Run Faster"/>
          <GoalSelect text="Better Abs"/>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <GoalSelect text="Jump Higher"/>
          <GoalSelect text="Do a Pull Up"/>
        </View>
        <View style={{alignItems: 'center'}}>
        <GoalSelect text="Other"/>
        </View>

    </>
  );
}