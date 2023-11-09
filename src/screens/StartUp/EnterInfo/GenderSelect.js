import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "$styles";

import { Image } from "expo-image";

export default function GenderSelect({
  image,
  text,
  handleHighlight,
  selected,
}) {
  const handlePress = () => {
    handleHighlight(text);
  };

  return (
    <TouchableOpacity
      style={[styles.buttonBox, selected === text && styles.selectedButton]}
      onPress={handlePress}
    >
      <Image source={image} style={styles.boxImage} />
      <Text style={[styles.boxText, selected === text && styles.selectedText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    margin: 5,
    width: "48%",
    borderWidth: 1,
    borderColor: "magenta",
    borderRadius: 10,
    padding: 10,
  },
  selectedButton: {
    backgroundColor: "magenta", // Change to your desired background color when selected
  },
  boxImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  boxText: {
    alignSelf: "center",
    borderColor: colors.black.default,
    fontSize: 15.5,
    color: "magenta",
    fontWeight: "bold",
  },
  selectedText: {
    color: "magenta", // Change to your desired text color when selected
  },
});
