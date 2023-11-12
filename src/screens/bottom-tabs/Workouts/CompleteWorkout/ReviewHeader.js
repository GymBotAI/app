import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "$styles";

export default function ScreenHeader({ title, onBackPress, onSavePress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Use 'space-between' to push buttons to the edges
    paddingTop: 40,
    height: 90,
    borderBottomWidth: 0.5,
    borderColor: colors.grey.lighter,
  },
  backButton: {
    paddingLeft: 15, // Adjust the padding to separate the "Back" button from the edge
  },
  saveButton: {
    paddingRight: 15, // Adjust the padding to separate the "Save" button from the edge
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black.lighter,
  },
  buttonText: {
    fontSize: 16,
    color: colors.blue.lighter,
  },
});
