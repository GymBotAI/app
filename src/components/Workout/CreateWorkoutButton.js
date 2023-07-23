import React from "react";
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons

export default function CreateWorkoutButton({ handleAddWorkout }) {
  return (

    <View
      style={styles.container}
    >
      <LinearGradient colors={["#1935d4", "#8496fa"]} style={styles.blueRectangle}>
        <ImageBackground
          source={require("../../../assets/dumbellbg.webp")}
          resizeMode="cover"
          style={{
            width: "110%",
            height: "100%",
            marginLeft: -15,
            marginBottom: 0,
            opacity: 0.2,
            blur: '20',
          }}
        />
         <Text style={styles.title}>Create a Workout</Text>
         
         <View style={styles.buttonsContainer}>
         <TouchableOpacity
            style={styles.designButtonContainer}
            onPress={handleAddWorkout}
        >
            <Text style={styles.addText}>Design</Text>

            <AntDesign name="arrowright" size={24} color="blackc" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.createButtonContainer}
            onPress={handleAddWorkout}
        >
            <Text style={styles.addText}>Explore</Text>

            <AntDesign name="arrowright" size={24} color="blackc" style={styles.icon} />
        </TouchableOpacity>
        
        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderRadius: 15,
        width: "95%",
        height: 250,
        backgroundColor: "#0f2cd6",
    },
    blueRectangle: {
      borderRadius: 15,
      width: '100%',
      height: 250,
      alignSelf: 'left',
    },
    title: {
        marginTop: -240,
        padding: 10,
        paddingLeft: 20,
        bottom: 5,
        color: "white",
        fontSize: 34,
        fontWeight: "bold",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 2,
    },
    buttonsContainer: {
        // backgroundColor: 'black',
        marginTop: 72,
        height: 95,
        width: '91%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  designButtonContainer: {
    backgroundColor:'white',
    width: "45%",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  createButtonContainer: {
    backgroundColor:'white',
    width: "45%",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  addText: {
    alignSelf: 'center',
    padding: 8,
    bottom: 5,
    color: "black",
    fontSize: 21,
    fontWeight: "bold",
  },
});
