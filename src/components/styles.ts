import { StyleSheet } from "react-native";

// Types
export interface Colors {
  [key: string]: ColorVariants;
}
export interface ColorVariants {
  darkest?: string;
  darker?: string;
  default?: string;
  lighter?: string;
  lightest?: string;
}

export const colors = {
  black: { default: "#000000", lighter: "#333333", lightest: "#444444" },
  blue: { default: "#1877F2", lighter: "#4392f9", lightest: "#8ED9DE" },
  green: { default: "#00DD33", lightest: "#8EDE99" },
  grey: { lighter: "#D8D8D8", lightest: "#F5F5F5" },
  orange: { default: "#FFA500" },
  red: { default: "#FF0000" },
  white: { default: "#FFFFFF" },
} as const satisfies Colors;

export const fontSize = 16;
export const font = "Georgia";

export const buttonStyles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: "75%",
    backgroundColor: colors.blue.default,
    borderRadius: 28,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  disabledButton: {
    backgroundColor: colors.white.default, // Change the background color of the disabled button
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: colors.grey.lighter,
    fontWeight: "bold",
  },
});
