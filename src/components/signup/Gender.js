import React, { useState } from "react";
import { View } from "react-native";

import GenderSelect from "../GenderSelect";

export default function Gender({ }) {
    const [highlight, setHighlight] = useState("");
    
    const handleHighlight = (text) => {
      setHighlight(text)
    }

  return (
    <View style={{
        flex: 1,
        display: 'flex',
        alignItems: "center",
        marginBottom: 20,}}>

        <View style={{display: 'flex', flexDirection: 'row'}}>
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
        
        <View style={{display: 'flex', flexDirection: 'row'}}>
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