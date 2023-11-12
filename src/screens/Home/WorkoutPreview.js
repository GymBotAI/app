import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "$styles";

import { Image } from "expo-image";

const WorkoutBoxLarge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Workout of the Day</Text>
      <TouchableOpacity
        style={styles.workoutBoxLarge}
        onPress={() => console.log("Workout of the Day pressed!")}
      >
        <Image
          source={require("$assets/ingymbg.jpg")}
          style={{
            width: "100%",
            height: "100%",
            marginLeft: -15,
            borderRadius: 10,
          }}
        />
        <View style={styles.whiteBlock}>
          <Text style={styles.workoutTitle}>Knee Building || 45 Minutes</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black.lighter,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  workoutBoxLarge: {
    width: "92%",
    height: 175, // Adjust the height for the larger version
    backgroundColor: colors.grey.lightest,
    borderRadius: 10,
    marginHorizontal: 10,
    alignSelf: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  titleSection: {
    width: "100%",
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black.default, // Change the text color to match the titleText
    textAlign: "left",
    padding: 10,
  },
  whiteBlock: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 40, // Height of the white section
    backgroundColor: colors.white.default,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default WorkoutBoxLarge;
