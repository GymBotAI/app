import { StyleSheet } from "react-native";

const bgPrimary = "#1360dd";
const fgPrimary = "#ffffff";
const borderDefault = "#a3a3a3";

export default StyleSheet.create({
  body: {
    backgroundColor: bgPrimary,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 32,
    color: fgPrimary,
  },
});
