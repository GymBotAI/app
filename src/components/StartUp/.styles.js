import { StyleSheet } from "react-native";

//------------------ BOX STYLES ------------------//

export const bVal = {
    buttonSize: 40,
    buttonColor: 'white',
    backOpacity: 0.9,
    backColor: '#1f1f1f',
    gymBotLogo: require("../../../assets/GymBotText.png"),
  };

  const commonButtonStyle = {
    position: "absolute",
    width: "85%",
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  };

  const commonTextStyle = {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  }

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
    },
    signUp: {
        ...commonButtonStyle,
        bottom: 150,
        alignSelf: "center",
        backgroundColor: "#ddd"
    },
    signupText: {
        ...commonTextStyle,
        color: "#333",
      },
    login: {
        ...commonButtonStyle,
        bottom: 80,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#ddd",
    },
    loginText: {
        ...commonTextStyle,
        color: "#ddd",
    }
});




//------------------ LOGIN AND SIGNUP STYLES ------------------//

export const aVal = {
  placeholder: 'white', 
};

export const Login = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: '100%',
    padding: 8,
    justifyContent: "center",
  },
  input: {
    marginBottom: 22,
    padding: 10,
    paddingRight: 0,
    paddingLeft: 3,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    color: "white",
    fontSize: 16,
  }
});