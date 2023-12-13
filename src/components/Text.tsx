import type { StylesObject } from "$types/styles";
import type { TextProps as RNTextProps } from "react-native";

import { Dimensions, Text as RNText, StyleSheet } from "react-native";

import { size } from "mathjs";

const { width, height } = Dimensions.get("window");
const holder = Math.min(width, height);
const smallFont = holder * 0.042;
const mediumFont = holder * 0.055;
const largeFont = holder * 0.075;
console.log(largeFont);
const largerFont = holder * 0.095;

/**
 * The variant prop is used to apply a predefined set of styles to the text.
 * @default "normal"
 */
export type TextVariant =
  | "header-huge"
  | "header-big"
  | "header-default"
  | "subheader"
  | "normal";

export interface TextStylingProps {
  bold?: boolean;

  size?: "small" | "medium" | "large" | 'larger';
}
export interface TextVariantProps {
  variant: TextVariant;
}
export type TextProps = Omit<RNTextProps, "children"> & {
  text: string;
} & (TextStylingProps | TextVariantProps);

export default function Text(props: TextProps) {
  return <RNText style={textStyles(props)}>{props.text}</RNText>;
}

const variantStyles: Record<TextVariant, TextStylingProps> = {
  "header-huge": {
    size: "larger",
    bold: true,
  },
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
    larger: {
      fontSize: largerFont,
    },
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

  const styles = {
    ...baseStyles,
    ...sizeStyles[stylingProps.size || "small"],
  };

  return StyleSheet.compose(styles, props.style);
}
