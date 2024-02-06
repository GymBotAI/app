import type { ColorsObject } from "$constants/baseColors";

// This file is generated based on $constants/baseColors with the command:
// bun run gen-colors

// DO NOT MANUALLY EDIT THIS FILE!
// Your changes will be overwritten

const colors = {
  primary: {
    lightest: "#4cc5ff",
    lighter: "#269fff",
    default: "#0079f3",
    darker: "#0060c0",
    darkest: "#00468d",
  },
  secondary: {
    lightest: "#ffc64c",
    lighter: "#ffa026",
    default: "#f37a00",
    darker: "#c06000",
    darkest: "#8d4700",
  },
  text: {
    lightest: "#6f6f6f",
    lighter: "#494949",
    default: "#232323",
    darker: "#090909",
    darkest: "#000000",
  },
  black: {
    lightest: "#6f6f6f",
    lighter: "#494949",
    default: "#232323",
    darker: "#090909",
    darkest: "#000000",
  },
  blue: {
    lightest: "#4cc5ff",
    lighter: "#269fff",
    default: "#0079f3",
    darker: "#0060c0",
    darkest: "#00468d",
  },
  green: {
    lightest: "#4cff75",
    lighter: "#26ff4f",
    default: "#00f329",
    darker: "#00c020",
    darkest: "#008d18",
  },
  orange: {
    lightest: "#ffc64c",
    lighter: "#ffa026",
    default: "#f37a00",
    darker: "#c06000",
    darkest: "#8d4700",
  },
  white: {
    lightest: "#ffffff",
    lighter: "#ffffff",
    default: "#ffffff",
    darker: "#e6e6e6",
    darkest: "#cccccc",
  },
} as const satisfies ColorsObject;

export default colors;
