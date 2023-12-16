import { Dimensions, StyleSheet } from "react-native";

import { colors } from "$styles";

const { width, height } = Dimensions.get("window");

//------------------ BOX STYLES ------------------//
containerHeight = Math.min(width, height) * 0.5;

export const bVal = {};
export const Box = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.grey.lightest,
    },
    chatContainer: {
    alignItems: "center",
    margin: containerHeight / 12.5,
    marginBottom: containerHeight / 9.4,
    },
    chatBox: {
    backgroundColor: colors.white.default,
    padding: containerHeight / 18.8,
    borderRadius: containerHeight / 18.8,
    flexDirection: "row",
    alignItems: "center",
    },
    chatText: {
    flex: 1, // Allow text to wrap within the available space
    fontSize: containerHeight / 9.4,
    fontWeight: "bold",
    color: colors.white.default,
    },
    button: {
    alignSelf: "center",
    position: "absolute",
    bottom: containerHeight / 18.8,
    width: "90%",
    backgroundColor: colors.blue.default,
    borderRadius: 8,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    },
    disabledButton: {
    backgroundColor: colors.white.default, // Change the background color of the disabled button
    },
    text: {
    alignSelf: "center",
    fontSize: containerHeight / 7.8,
    paddingVertical: containerHeight / 18.8,
    color: colors.grey.lighter,
    fontWeight: "bold",
    },
});