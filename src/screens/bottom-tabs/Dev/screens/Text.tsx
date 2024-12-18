import { View } from "react-native";

import Text from "$components/Text";

import SyntaxHighlighter from "react-native-syntax-highlighter";

export default function TextDevScreen() {
  return (
    <View
      style={{ display: "flex", flexDirection: "column", gap: 12, padding: 12 }}
    >
      <Text text="Text" variant="header-big" />
      <Text text="The text component is used for showing text." />

      <Text text="Examples" variant="header-default" />
      <Text text="First, import it from `$components/Text`." />
      <SyntaxHighlighter>
        {`<Text text="This is a normal text" />
<Text text="This is a bold text" bold />
<Text text="This is a big header" variant="header-big" />`}
      </SyntaxHighlighter>

      <Text text="Variants" variant="header-default" />
      <Text text="All the existing text variants are listed below:" />

      {(["header-big", "header-default", "subheader", "normal"] as const).map(
        (variant) => (
          <Text text={variant} variant={variant} key={variant} />
        )
      )}
    </View>
  );
}
