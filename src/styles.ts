import { StyleSheet } from "react-native";

export const bgPrimary = "#4DBCC1";
export const bgMenu = "#408589";
export const borderDefault = "#FFFFFF";
export const white = "#FFFFFF";
export const fontSize = 16;
export const font = "Georgia";
export const circularColour = "#55BCF6";
export const minHeight = 40;
export const maxHeight = 250;
export const minWeight = 30;
export const maxWeight = 500;

export const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 12);

export const minDate = new Date(1900, 0, 1);

export const buttonStyles = StyleSheet.create({  
button: {
  alignSelf: "center",
  width: "75%",
  backgroundColor: "#1260de",
  borderRadius: 28,
  shadowColor: "black",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 5,
},
disabledButton: {
  backgroundColor: "#fff", // Change the background color of the disabled button
},
text: {
  alignSelf: "center",
  fontSize: 24,
  paddingVertical: 10,
  color: "#dbdbdb",
  fontWeight: "bold",
},
})