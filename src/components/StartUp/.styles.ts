import { StyleSheet } from "react-native";

export const bgPrimary = "#4DBCC1";



//------------------ BOX STYLES ------------------//

export const bVal = {
    buttonSize: 40,
    buttonColor: 'white',
    backOpacity: 0.9,
    backColor: '#1f1f1f',
    gymBotLogo: require("../../../assets/GymBotText.png"),
  };

export const Box = StyleSheet.create({
    touchable: {
        position: "absolute",
        top: 35,
        right: 5,
        width: 40,
        zIndex: 1,
    },
    logo: {
        width: 220,
        height: 110,
        borderRadius: 50,
    },
    logoView: {
        position: "absolute",
        zIndex: 1,
        top: 60,
        width: "100%",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
    }
});
