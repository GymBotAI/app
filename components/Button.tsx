import type { StylesObject } from "$types/styles";
import type { PressableProps } from "react-native";

import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

import { Link } from "expo-router";

import { colors } from "$styles";

export type ButtonProps = Omit<PressableProps, "style"> & {
  /**
   * The text to display inside the button.
   */
  text: string;

  /**
   * The size of the button.
   */
  size?: "small" | "medium" | "large";

  style?: StylesObject;

  /**
   * If specified, when the button is clicked it will navigate
   * to the specified route.
   */
  href?: string;

  variant?: "blue" | "white-primary" | "white-secondary";
};

const { width, height } = Dimensions.get("window");
const holder = Math.min(width, height);
const smallFont = holder * 0.058;
const mediumFont = holder * 0.07;
const largeFont = holder * 0.075;

/**
 * Styles that are shared in common between the
 * `white-primary` and `white-secondary` variants.
 */
const whiteVariantBaseStyles: StylesObject = {
  width: "95%",
  paddingVertical: 10,
  borderRadius: 8,
  shadowColor: colors.black.default,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 4,
  elevation: 5, // For Android shadow
};

const variantButtonStyles = StyleSheet.create({
  blue: {
    backgroundColor: colors.blue.default,
  },

  "white-primary": {
    ...whiteVariantBaseStyles,
    backgroundColor: colors.grey.lightest,
  },

  "white-secondary": {
    ...whiteVariantBaseStyles,
    borderWidth: 1,
    borderColor: colors.grey.lighter,
  },
}) satisfies Record<ButtonProps["variant"], unknown>;

const sizeButtonStyles = StyleSheet.create({
  large: {
    padding: largeFont / 2.8,
  },
  medium: {
    padding: mediumFont / 2.9,
  },
  small: {
    padding: smallFont / 3.66,
  },
});

function createButtonStyles(props: ButtonProps) {
  const baseButtonStyles: StylesObject = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: holder / 12.5,
    paddingHorizontal: 16,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
  } as const;

  const styles: StylesObject[] = [
    baseButtonStyles,
    variantButtonStyles[props.variant],
    sizeButtonStyles[props.size],
  ];

  if (props.disabled) {
    styles.push({
      backgroundColor: colors.white.default,
    });
  }

  return styles;
}

const baseTextStyles: StylesObject = {
  color: "#ededed",
  fontWeight: "bold",
} as const;

const variantTextStyles = StyleSheet.create({
  blue: {
    color: colors.white.default,
  },
  "white-primary": {
    color: colors.black.lighter,
  },
  "white-secondary": {
    color: colors.grey.lighter,
  },
}) satisfies Record<ButtonProps["variant"], unknown>;

const sizeTextStyles = StyleSheet.create({
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

function createTextStyles(props: ButtonProps) {
  return [
    baseTextStyles,
    variantTextStyles[props.variant],
    sizeTextStyles[props.size],
  ];
}

export default function Button(props: ButtonProps) {
  props = {
    size: "small",
    variant: "blue",
    ...props,
  };

  const buttonStyles = createButtonStyles(props);
  const textStyles = createTextStyles(props);

  return (
    <Pressable
      {...props}
      style={(state) => [
        buttonStyles,
        { opacity: state.pressed ? 0.5 : 1 },
        props.style,
      ]}
    >
      {props.href ? (
        <Link style={textStyles} href={props.href}>
          {props.text}
        </Link>
      ) : (
        <Text style={textStyles}>{props.text}</Text>
      )}
    </Pressable>
  );
}
