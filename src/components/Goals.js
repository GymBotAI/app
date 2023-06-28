import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, } from "react-native";


export default function GenderSelect({ text, }) {
    const [selected, setSelected] = useState(false)

    const handlePress = () => {
        setSelected(!selected);
    };

  return (
    <TouchableOpacity style={[styles.buttonBox, selected && styles.selectedButton]} onPress={handlePress}>
    <Text style={styles.boxText}>{text}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    margin: 10,
    width: '45%',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 20,
  },
  selectedButton: {
    backgroundColor: "#ff9800", // Change to your desired background color when selected
  },
  boxImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  boxText: {
    alignSelf: "center",
    borderColor: "black",
    fontSize: 16,
  },
});
