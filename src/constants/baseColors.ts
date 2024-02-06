import type colors from '$constants/colors';

import tinycolor from 'tinycolor2';

export interface ColorObject {
  lightest?: string;
  lighter?: string;
  default?: string;
  darker?: string;
  darkest?: string;
}
export type ColorsObject = Record<string, ColorObject>;

const primary = tinycolor('#0079f3');
export const baseColors = {
  black: '#232323',
  blue: primary.toString(),
  green: primary.spin(280).toString(),
  orange: primary.spin(260).toString(),
  white: '#ffffff',
} as const satisfies Record<string, string>;

export const colorBlendValue = 10;

export type ColorValue =
  (typeof colors)[keyof typeof colors][keyof (typeof colors)[keyof typeof colors]];

export const specialColors = {
  primary: 'blue',
  secondary: 'orange',
  text: 'black',
} as const satisfies Record<string, keyof typeof baseColors>;
export const specialColorsAmount = Object.keys(specialColors).length;
export type SpecialColorName = keyof typeof specialColors;
