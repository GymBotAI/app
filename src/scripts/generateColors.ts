// We can't use import aliases in scripts or
// they won't work in the postinstall script
import type { ColorsObject } from '../constants/baseColors';

import {
  baseColors,
  colorBlendValue,
  specialColors,
} from '../constants/baseColors';

import { format } from 'prettier';
import tinycolor from 'tinycolor2';

let colors: ColorsObject = {};

for (const [colorName, color] of Object.entries(baseColors)) {
  const colorDefault = tinycolor(color);
  colors[colorName] = {
    lightest: colorDefault
      .clone()
      .brighten(3 * colorBlendValue)
      .toHexString(),
    lighter: colorDefault
      .clone()
      .brighten(1.5 * colorBlendValue)
      .toHexString(),
    default: color,
    darker: colorDefault.clone().darken(colorBlendValue).toHexString(),
    darkest: colorDefault
      .clone()
      .darken(2 * colorBlendValue)
      .toHexString(),
  };
}

colors = Object.assign(
  Object.fromEntries(
    Object.entries(specialColors).map(([key, colorName]) => [
      key,
      colors[colorName],
    ]),
  ),
  colors,
);

await Bun.write(
  './src/constants/colors.ts',
  await format(
    `import type { ColorsObject } from "$constants/baseColors";

// This file is generated based on $constants/baseColors with the command:
// bun run gen-colors

// DO NOT MANUALLY EDIT THIS FILE!
// Your changes will be overwritten

const colors = ${JSON.stringify(
      colors,
      null,
      2,
    )} as const satisfies ColorsObject;

export default colors;
`,
    { parser: 'typescript' },
  ),
);
