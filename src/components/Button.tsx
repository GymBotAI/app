import type { TouchableOpacityProps } from "react-native";

import { TouchableOpacity } from "react-native";

import { colors } from "$styles";

export default function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...props}
      style={{
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
      }}
    >
      {props.children}
    </TouchableOpacity>
  );
}
