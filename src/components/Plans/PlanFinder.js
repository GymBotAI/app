import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import PlanTabs from "./PlanTabs";

export default function PlanFinder({ onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const rectangles = ["Rectangle 1", "Rectangle 2", "Rectangle 3", "Rectangle 4", "Rectangle 5"];

  const filteredRectangles = rectangles.filter((rectangle) =>
    rectangle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search rectangles"
          placeholderTextColor="#888" // Set the placeholder text color
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <ScrollView style={styles.tabsContainer}>
        {filteredRectangles.map((text, index) => (
          <PlanTabs key={index} text={text} />
        ))}
      </ScrollView>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width - 20;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
  },
  tabsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  searchBarContainer: {
    position: "absolute",
    top: 20,
    left: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: "#000", // Set the text color
  },
});
