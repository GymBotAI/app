import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BookmarkedPlans = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Bookmarked Plans Page</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default BookmarkedPlans;