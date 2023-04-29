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
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: borderDefault,
    borderRadius: 5,
    color: "black",
    backgroundColor: fgPrimary,
    padding: 5,
  },
  ChatMessages: {
    padding: 10,
    backgroundColor: fgPrimary,
    display: "flex",
    gap: 10,
  },
  ChatMessage: {
    color: "red",
  },
  ChatMessageIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: borderDefault,
    borderWidth: 1,
  },
  ChatInput: {
    width: "100%",
    backgroundColor: fgPrimary,
    padding: 5,
  },
  Chat: {
    width: "100%",
  },
});
