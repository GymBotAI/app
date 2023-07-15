import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Workouts = (props) => {
  const [circleColor, setCircleColor] = useState("blue");

  const handlePress = () => {
    if (circleColor === "green") {
      setCircleColor("blue");
    } else {
      setCircleColor("green");
    }
    props.onPress();
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{props.title}</Text>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
      <View style={[styles.circular, { borderColor: circleColor }]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "blue",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    marginTop: 4,
  },
  itemContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    maxWidth: "80%",
  },
  itemText: {
    maxWidth: "100%",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: "100%",
    marginBottom: 8,
  },
  circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: "center",
  },
});

export default Workouts;