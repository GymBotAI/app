import type { IconProps as ExpoIconProps } from "@expo/vector-icons/build/createIconSet";

import { Feather } from "@expo/vector-icons";

export type IconProps = ExpoIconProps<keyof (typeof Feather)["glyphMap"]>;

export default function Icon(props: IconProps) {
  return <Feather {...props} />;
}
