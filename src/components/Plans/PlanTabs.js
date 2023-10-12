import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function PlanTabs({ text, length, data, viewData }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={[styles.rectangle, {paddingBottom: viewData ? 10 : 0}]}>
      <View style={styles.contentContainer}>
        <Text>{text}</Text>
        <View style={styles.lengthContainer}>
          <View style={styles.lengthBox}>
            <Text style={styles.lengthText}>{length} Days</Text>
          </View>
        </View>
      </View>
      {viewData && (
        <View style={styles.dataContainer}>
         <Text>{data}</Text>
          <View style={styles.checkboxContainer}>
            <FontAwesome5
              name={isChecked ? "check-square" : "square"}
              size={30}
              color = {isChecked ? "green" : "gray"}
              onPress={() => setIsChecked(!isChecked)}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    width: "80%",
    backgroundColor: "#888",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  contentContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  lengthContainer: {
    backgroundColor: "darkgray",
    borderRadius: 10,
    marginLeft: 10,
    padding: 5,
  },
  lengthBox: {
    width: 65,
    height: 30,
    borderRadius: 15,
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  lengthText: {
    color: "lightgray",
    fontSize: 16,
  },
  dataContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexGrow: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkboxContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flex: 1,
  },
});