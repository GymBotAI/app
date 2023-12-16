import type { StylesObject } from "$types/styles";
import type { TouchableOpacityProps } from "react-native";

import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "$styles";

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  size?: "small" | "medium" | "large";
};

const { width, height } = Dimensions.get("window");
const holder = Math.min(width, height);
const smallFont = holder * 0.058;
const mediumFont = holder * 0.07;
const largeFont = holder * 0.075;
const smallPadding = smallFont / 3.66;
const mediumPadding = mediumFont / 2.9;
const largePadding = largeFont / 2.8;
const borderRadius = holder / 12.5;
console.log(borderRadius);

function buttonStyles(props: ButtonProps) {
  const baseStyles: StylesObject = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.disabled
      ? colors.white.default
      : colors.blue.default,
    borderRadius: borderRadius,
    paddingHorizontal: 16,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: "center",
  } as const;

  const sizeStyles = StyleSheet.create({
    large: {
      padding: largePadding,
    },
    medium: {
      padding: mediumPadding,
    },
    small: {
      padding: smallPadding,
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
      fontSize: largeFont,
    },
    medium: {
      fontSize: mediumFont,
    },
    small: {
      fontSize: smallFont,
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
