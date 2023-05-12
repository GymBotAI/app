import { StyleSheet } from "react-native";

const bgPrimary = "#4DBCC1";
const bgMenu = "#408589";
const borderDefault = "#FFFFFF";
const white = "#FFFFFF";
const fontSize = 16;
const font = "Georgia";

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
    color: white,
    textAlign: "center",
    backgroundColor: bgMenu,
    width: "100%",
    height: "6.5%",
    paddingTop: "0.5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "Impact",
    letterSpacing: ".5px",
    wordSpacing: "1px",
    position: "absolute",
    top: 0,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: borderDefault,
    borderRadius: 5,
    color: "black",
    backgroundColor: bgPrimary,
    padding: 10,
    width: "95%",
    justifyContent: "center",
    fontFamily: font,
    fontSize: fontSize,
  },
  ChatInput: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  ChatMessages: {
    padding: 10,
    display: "flex",
    flex: 1,
    gap: 10,
    flexGrow: "1",
    justifyContent: "flex-end",
  },
  ChatMessageText: {
    color: white,
    fontSize: fontSize,
    fontFamily: font,
  },
  ChatMessageIcon: {
    width: 32,
    height: 32,
    borderRadius: 15,
    borderColor: borderDefault,
    borderWidth: 1,
  },
  container: {
    flex: 1,
  },
  Chat: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
});
