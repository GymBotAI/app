import React, { useState } from "react";
import { Image, Text, TouchableOpacity, StyleSheet, } from "react-native";


export default function GenderSelect({ image, text }) {
    const [isSelected, setIsSelected] = useState(false);


const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity style={[styles.buttonBox, isSelected && styles.selectedButton]} onPress={handlePress}>
    <Image source={image} style={styles.boxImage} />
    <Text style={styles.boxText}>{text}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    margin: 5,
    width: '45%',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    padding: 10,
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
