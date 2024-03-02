import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { createContext, useContext } from 'react';

export const StylesContext = createContext<ViewStyle | TextStyle | ImageStyle>(
  {},
);
export const useStylesContext = () => useContext(StylesContext);
