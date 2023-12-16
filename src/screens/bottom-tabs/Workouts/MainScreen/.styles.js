import { Dimensions, StyleSheet } from "react-native";

import { colors } from "$styles";

const { width, height } = Dimensions.get("window");

//------------------ BOX STYLES ------------------//
fontSize = Math.min(width, height) * 0.048;
test = fontSize / 0.82;
console.log(test);

export const bVal = {};
export const Box = StyleSheet.create({
  container: {
    flex: 1,
  },
  addText: {
    alignSelf: "center",
    fontSize: fontSize,
    fontWeight: "bold",
    paddingVertical: fontSize / 1.8,
    color: colors.grey.lightest,
  },
  addButton: {
    position: "absolute",
    bottom: fontSize / 1.8,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: colors.blue.default,
    borderRadius: fontSize / 0.82,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
});

//------------------ CREATE WORKOUT BUTTON ------------------//
containerHeight = Math.min(width, height) * 0.5;

export const createWorkout = StyleSheet.create({
  container: {
    marginTop: containerHeight / 16,
    alignSelf: "center",
    borderRadius: containerHeight / 12.5,
    width: "93%",
    height: containerHeight,
  },
  blueRectangle: {
    borderRadius: containerHeight / 12.5,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Move content to the bottom
    padding: containerHeight / 12.5,
    horizontalPadding: containerHeight / 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: containerHeight / 2.6,
  },
  designButtonContainer: {
    backgroundColor: colors.white.default,
    width: "48%", // Adjust the button widths
    borderRadius: containerHeight / 30,
    alignItems: "center",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    paddingVertical: containerHeight * 0.025,
  },
});

//------------------ TALK TO GYMBOT ------------------//
containerHeight2 = Math.min(width, height) * 0.55;

console.log(containerHeight2 / 10.3);

export const talkTo = StyleSheet.create({
  container: {
    backgroundColor: colors.blue.default,
    width: "93%",
    alignSelf: "center",
    borderRadius: containerHeight2 / 10.3,
    padding: containerHeight2 / 11,
    marginTop: containerHeight2 / 12,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: containerHeight2 / 35, // Adjust the value as needed
  },
  button: {
    marginTop: containerHeight2 / 16,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: containerHeight2 / 20,
    paddingHorizontal: containerHeight2 / 12,
    borderRadius: containerHeight2 / 10.3,
    backgroundColor: colors.grey.lightest,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
});

//------------------ WORKOUT LIST  ------------------//
containerHeight3 = Math.min(width, height) * 0.55;

console.log(containerHeight3 / 18);
export const workoutList = StyleSheet.create({
  container: {
    marginLeft: containerHeight3 / 20,
    marginBottom: containerHeight3 / 3.1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: containerHeight3 / 35,
  },
  boxContainer: {
    flexDirection: "row",
    marginHorizontal: containerHeight3 / -40,
  },
  viewAllButton: {
    fontSize: containerHeight3 / 11.4,
    fontWeight: "bold",
    color: colors.orange.default,
  },
  titleSection: {
    width: "100%",
    height: containerHeight3 / 4.5, // Set the desired height for the title section
    backgroundColor: colors.orange.default, // Red background color
    borderTopLeftRadius: containerHeight3 / 18,
    borderTopRightRadius: containerHeight3 / 18,
    justifyContent: "center",
    alignItems: "center",
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white.default, // White text color
    padding: 12,
  },
  exercisesContainer: {
    flex: 1,
    justifyContent: "center",
  },
  exerciseText: {
    fontSize: 14,
    color: colors.black.lightest,
    textAlign: "center",
    marginBottom: 5,
  },
  workoutBox: {
    width: 130,
    height: 130,
    backgroundColor: colors.grey.lightest,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  plusIconContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "dashed",
    borderColor: colors.black.lightest,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
});
