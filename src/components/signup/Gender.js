import React, { useState } from "react";
import { View } from "react-native";

import GenderSelect from "../GenderSelect";

export let genderVal = "";

export default function Gender({ onGenderChange }) {
  const [highlight, setHighlight] = useState("");

  const handleHighlight = (text) => {
    onGenderChange(true);
    setHighlight(text);
    genderVal = text;
  };

  return (
    <View
      style={{
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <GenderSelect
          image={require("../../../assets/man.png")}
          text="Male"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
        <GenderSelect
          image={require("../../../assets/woman.png")}
          text="Female"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
      </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <GenderSelect
          image={require("../../../assets/user.png")}
          text="Other"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
        <GenderSelect
          image={require("../../../assets/user.png")}
          text="Prefer Not to Say"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
      </View>
    </View>
  );
}
