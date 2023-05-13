import { Text } from "react-native";

export default function ScreenHeader({ text }) {
  return (
    <Text
      style={{
        fontSize: 32,
        paddingTop: 40,
        paddingBottom: 5,
        color: "black",
        fontFamily: "Impact",
        letterSpacing: 0.5,
        backgroundColor: "white",
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {text}
    </Text>
  );
}
