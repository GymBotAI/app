import {
  originalStylesheetDeclarationBackupPath,
  originalStylesheetDeclarationPath,
  patchedStylesheetDeclarationIndicator,
} from './stylesheetTypes';

import { readFile } from 'fs/promises';

// first try to read the backup and fallback to the original
const originalStylesheetDeclaration = await readFile(
  originalStylesheetDeclarationBackupPath,
  'utf-8',
).catch(() => readFile(originalStylesheetDeclarationPath, 'utf-8'));

if (
  !originalStylesheetDeclaration.includes(patchedStylesheetDeclarationIndicator)
) {
  // make a backup of the original file
  await Bun.write(
    originalStylesheetDeclarationBackupPath,
    originalStylesheetDeclaration,
  );

  const patchedStylesheetDeclaration =
    patchedStylesheetDeclarationIndicator +
    '\nimport type { UISize, UIPercentSize } from "../../../../src/types/styles";\n\n' +
    originalStylesheetDeclaration
      .replace(
        /(?<=type\s+DimensionValue\s*=[^;]*?`\${)number(?=}%`)/,
        'UIPercentSize',
      )
      .replace(
        /(?<=^\s*(\w+)(?<!flex(?:Grow|Shrink)?|elevation|zIndex)\s*\??\s*:\s*.+?)number(?=.*?;\s*$)|(?<=type\s+(?:DimensionValue|AnimatableNumericValue)\s*=[^;]*?)number/gm,
        'UISize',
      ) +
    '\n';

  await Bun.write(
    originalStylesheetDeclarationPath,
    patchedStylesheetDeclaration,
  );
}
