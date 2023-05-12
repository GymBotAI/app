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
    color: 'white',
    fontFamily: 'Impact',
    letterSpacing: 0.5,
    wordSpacing: 1,
    backgroundColor: bgMenu,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: borderDefault,
    borderRadius: 5,
    color: 'white',
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
    width: '100%'
  },
  Chat: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
});
