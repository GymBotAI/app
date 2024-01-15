export interface Colors {
  [color: string]: ColorVariants;
}
export interface ColorVariants {
  darkest?: string;
  darker?: string;
  default?: string;
  lighter?: string;
  lightest?: string;
}

export const colors = {
  primary: { default: "#1877F2", lighter: "#4392f9", lightest: "#8ED9DE" },
  positive: {default: "#808080", lighter: "#D8D8D8", lightest: "#F5F5F5", darker: "#a9a9a9"},
  black: { default: "#000000", lighter: "#333333", lightest: "#444444" },
  blue: { default: "#1877F2", lighter: "#4392f9", lightest: "#8ED9DE" },
  green: { default: "#00DD33", lightest: "#8EDE99" },
  grey: {
    default: "#808080",
    lighter: "#D8D8D8",
    lightest: "#F5F5F5",
    darker: "#a9a9a9",
  },
  orange: { default: "#FFA500" },
  red: { default: "#FF0000" },
  white: { default: "#FFFFFF" },
} as const satisfies Colors;

