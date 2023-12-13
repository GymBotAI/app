import type { TouchableOpacityProps } from "react-native";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "$styles";

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  size?: "small" | "medium" | "large";
};

function buttonStyles(props: ButtonProps) {
  const baseStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue.default,
    borderRadius: 22,
    shadowColor: colors.black.default,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  } as const;

  const sizeStyles = StyleSheet.create({
    large: {
      padding: 10,
    },
    medium: {
      padding: 8,
    },
    small: {
      padding: 6,
    },
  });

  return {
    ...baseStyles,
    ...sizeStyles[props.size],
  };
}

function textStyles(props: ButtonProps) {
  const baseStyles = {
    color: "#ededed",
    fontWeight: "bold",
  } as const;

  const sizeStyles = StyleSheet.create({
    large: {
      fontSize: 28,
    },
    medium: {
      fontSize: 26,
    },
    small: {
      fontSize: 24,
    },
  });

  return {
    ...baseStyles,
    ...sizeStyles[props.size],
  };
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={StyleSheet.compose(buttonStyles(props), props.style)}
    >
      <Text style={textStyles(props)}>{props.text}</Text>
    </TouchableOpacity>
  );
}
