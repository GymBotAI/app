import type { StylesObject } from "$types/styles";
import type { TouchableOpacityProps } from "react-native";

import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";

import { colors } from "$styles";

export type SelectTabProps = TouchableOpacityProps & {
  text: string;
  size?: "small" | "medium" | "large";
  textStyle: StylesObject;
};

const { width, height } = Dimensions.get("window");
const holder = Math.min(width, height);

console.log(holder)


function buttonStyles(props: SelectTabProps) {
  const baseStyles: StylesObject = {
    flex: 1,
    backgroundColor: colors.white.default,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
    marginRight: 10,
  } as const;

  const sizeStyles = StyleSheet.create({
    large: {
      padding: 10,
    },
    medium: {
      padding: 5,
    },
    small: {
      padding: 1,
    },
  });

  return {
    ...baseStyles,
    ...sizeStyles[props.size],
  };
}

export default function SelectTab(props: SelectTabProps) {
  props = {
    size: "small",
    ...props,
  };
  console.log(props.textStyle)
  return (
    <TouchableOpacity
      {...props}
      style={StyleSheet.compose(buttonStyles(props), props.style)}
    >
      <Text text={props.text} size="submedium" style={props.textStyle}/>
    </TouchableOpacity>
  );
}
