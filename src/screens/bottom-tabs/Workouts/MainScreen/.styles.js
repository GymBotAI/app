import { Dimensions, StyleSheet } from "react-native";

import { colors } from "$styles";

const { width, height } = Dimensions.get("window");

//------------------ BOX STYLES ------------------//

export const bVal = {};
export const Box = StyleSheet.create({
  container: {
    flex: 1,
  },
  addText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    color: colors.grey.lightest,
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: colors.blue.default,
    borderRadius: 22,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
});

//------------------ CREATE WORKOUT BUTTON ------------------//
containerHeight = Math.min(width, height) * 0.5;
buttonHeight = containerHeight / 2.6;
buttonPadding = Math.min(width, height) * 0.025;
buttonFont = containerHeight * 0.11;
horizontalPadding = containerHeight / 12;

export const createWorkout = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 15,
    width: "93%",
    height: containerHeight,
  },
  blueRectangle: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Move content to the bottom
    padding: 15,
    horizontalPadding: horizontalPadding,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: buttonHeight,
  },
  designButtonContainer: {
    backgroundColor: colors.white.default,
    width: "48%", // Adjust the button widths
    borderRadius: 5,
    alignItems: "center",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    paddingVertical: buttonPadding,
  },
});

//------------------ TALK TO GYMBOT ------------------//
containerHeight2 = Math.min(width, height) * 0.55;
padding = containerHeight2 / 11;
textBottom = containerHeight2 / 35;
topSpace = containerHeight2 / 12;
verticalPadding = containerHeight2 / 20;
horizontalPadding2 = containerHeight2 / 12;
marginTop = containerHeight2 / 16;

export const talkTo = StyleSheet.create({
  container: {
    backgroundColor: colors.blue.default,
    width: "93%",
    alignSelf: "center",
    borderRadius: 20,
    padding: padding,
    marginTop: topSpace,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: textBottom, // Adjust the value as needed
  },
  button: {
    marginTop: marginTop,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: verticalPadding,
    paddingHorizontal: horizontalPadding2,
    borderRadius: 20,
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
