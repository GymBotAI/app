import type { StylesObject } from "$types/styles";
import type { TextProps as RNTextProps } from "react-native";

import { Text as RNText, StyleSheet } from "react-native";

export type TextProps = RNTextProps & {
  bold?: boolean;

  size?: "small" | "medium" | "large";

  text: string;
};

export default function Text(props: TextProps) {
  return <RNText style={textStyles(props)}>{props.text}</RNText>;
}

function textStyles(props: TextProps) {
  const baseStyles: StylesObject = {
    fontWeight: props.bold ? "bold" : "normal",
  };

  const sizeStyles = StyleSheet.create({
    large: {
      fontSize: 26,
    },
    medium: {
      fontSize: 20,
    },
    small: {
      fontSize: 14,
    },
  });

  const styles = {
    ...baseStyles,
    ...sizeStyles[props.size || "small"],
  };

  return StyleSheet.compose(styles, props.style);
}
