import { StyleSheet } from "react-native";

import { colors } from "$styles";

//------------------ BOX STYLES ------------------//

export const bVal = {};
export const Box = StyleSheet.create({
  container: {
    flex: 1,
  },
  recordButton: {
    position: "absolute",
    bottom: 10,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: colors.blue.default,
    borderRadius: 8,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  recordText: {
    alignSelf: "center",
    fontSize: 23,
    fontWeight: "bold",
    paddingVertical: 10,
    color: colors.grey.lightest,
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
    borderRadius: 24,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
});

//------------------ CREATE WORKOUT BUTTON ------------------//
