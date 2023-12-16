import type { StylesObject } from "$types/styles";
import type { TouchableOpacityProps } from "react-native";

import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "$styles";

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  size?: "small" | "medium" | "large";
};

const { width, height } = Dimensions.get("window");

function buttonStyles(props: ButtonProps) {
  const baseStyles: StylesObject = {
    display: "flex",
  } as const;

  const sizeStyles = StyleSheet.create({
    large: {
      padding: ,
    },
    medium: {
      padding: ,
    },
    small: {
      padding: ,
    },
  });

  return {
    ...baseStyles,
    ...sizeStyles[props.size],
  };
}

function textStyles(props: ButtonProps) {
  const baseStyles: StylesObject = {
    color: "#ededed",
    fontWeight: "bold",
  } as const;

  const sizeStyles = StyleSheet.create({
    large: {
      fontSize: ,
    },
    medium: {
      fontSize: ,
    },
    small: {
      fontSize: ,
    },
  });

  return {
    ...baseStyles,
    ...sizeStyles[props.size],
  };
}

export default function Button(props: ButtonProps) {
  props = {
    size: "small",
    ...props,
  };

  return (
    <TouchableOpacity
      {...props}
      style={StyleSheet.compose(buttonStyles(props), props.style)}
    >
      <Text style={textStyles(props)}>{props.text}</Text>
    </TouchableOpacity>
  );
}
