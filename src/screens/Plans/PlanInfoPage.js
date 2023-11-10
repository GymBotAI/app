import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "$styles";

import { FontAwesome5 } from "@expo/vector-icons";

export default function PlanInfoPage({ onClose, plan, image }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        blurRadius={5}
      >
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkButton}>
          <FontAwesome5 name="bookmark" color="orange" />
        </TouchableOpacity>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 130 }}
        >
          <Text style={styles.planName}>{plan.name}</Text>
          <Text style={styles.planLength}>{plan.length} days</Text>
          {plan.data && Array.isArray(plan.data) ? (
            <View style={styles.tagContainer}>
              {plan.data.map((item, index) => (
                <View key={index} style={styles.rectangle}>
                  <Text style={styles.centeredBoxTitle}>{item[0]}</Text>
                  <Text style={styles.centeredBoxDescription}>{item[1]}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.error}>No data available</Text>
          )}
        </ScrollView>
      </ImageBackground>
      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.blueButtonText}>Save Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height - 60;

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
  },
  error: {
    position: "absolute",
    top: windowHeight / 2 - 40,
    left: windowWidth / 2 - 47,
  },
  scrollView: {
    paddingTop: 0,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: colors.white.default,
    fontSize: 18,
    fontWeight: "bold",
  },
  bookmarkButton: {
    position: "absolute",
    top: 20,
    right: 70,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: colors.white.default,
  },
  planLength: {
    position: "absolute",
    top: 30,
    fontWeight: "bold",
    fontSize: 15,
    color: colors.grey.lighter,
    left: 40,
  },
  planName: {
    position: "absolute",
    top: 27,
    left: 0,
    right: 0,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  blueButton: {
    position: "absolute",
    bottom: 75,
    left: windowWidth * 0.05,
    width: "90%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  blueButtonText: {
    color: colors.white.default,
    fontSize: 18,
    fontWeight: "bold",
  },
  tagContainer: {
    marginTop: 60,
    paddingHorizontal: 10,
  },
  rectangle: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  centeredBoxTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  centeredBoxDescription: {
    fontSize: 14,
  },
});
