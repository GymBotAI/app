import { StyleSheet } from "react-native";

export const bgPrimary = "#4DBCC1";



//------------------ BOX STYLES ------------------//

export const boxValues = {
    buttonSize: 40,
    buttonColor: 'white',
    backOpacity: 0.9,
    backColor: '#1f1f1f',
  };

export const Box = StyleSheet.create({
    touchable: {
        position: "absolute",
        top: 35,
        right: 5,
        width: 40,
        zIndex: 1,
    }
});
