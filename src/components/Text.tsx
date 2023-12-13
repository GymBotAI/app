import type { StylesObject } from "$types/styles";
import type { TextProps as RNTextProps } from "react-native";

import { Text as RNText, StyleSheet } from "react-native";

/**
 * The variant prop is used to apply a predefined set of styles to the text.
 * @default "normal"
 */
export type TextVariant =
  | "header-big"
  | "header-default"
  | "subheader"
  | "normal";

export interface TextStylingProps {
  bold?: boolean;

  size?: "small" | "medium" | "large";
}
export interface TextVariantProps {
  variant: TextVariant;
}
export type TextProps = RNTextProps & {
  text: string;
} & (TextStylingProps | TextVariantProps);

export default function Text(props: TextProps) {
  return <RNText style={textStyles(props)}>{props.text}</RNText>;
}

const variantStyles: Record<TextVariant, TextStylingProps> = {
  "header-big": {
    size: "large",
    bold: true,
  },
  "header-default": {
    size: "medium",
    bold: true,
  },
  subheader: {
    size: "small",
    bold: true,
  },
  normal: {
    size: "small",
    bold: false,
  },
};

function textStyles(props: TextProps) {
  const stylingProps =
    "variant" in props ? variantStyles[props.variant] : props;

  const baseStyles: StylesObject = {
    fontWeight: stylingProps.bold ? "bold" : "normal",
  };

  const sizeStyles = StyleSheet.create({
    large: {
      fontSize: 26,
    },
    medium: {
      fontSize: 26,
    },
    small: {
      fontSize: 16,
    },
  });

  const styles = {
    ...baseStyles,
    ...sizeStyles[stylingProps.size || "small"],
  };

  return StyleSheet.compose(styles, props.style);
}
