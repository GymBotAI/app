import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AddedTabs = ({ plan }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.planName}>{plan.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  planName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddedTabs;
