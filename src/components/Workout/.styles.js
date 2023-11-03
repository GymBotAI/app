import { StyleSheet } from "react-native";

//------------------ BOX STYLES ------------------//

export const bVal = {};
export const Box = StyleSheet.create({
  container: {
    flex: 1,
  },
  recordButton: {
    position: "absolute",
    bottom: 80,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
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
    color: "#dbdbdb",
  }, 
  addText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
  addButton: {
    position: "absolute",
    bottom: 80,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#1260de",
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  }
});

//------------------ LOGIN AND SIGNUP STYLES ------------------//
