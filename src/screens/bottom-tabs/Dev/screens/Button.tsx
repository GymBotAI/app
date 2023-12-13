import { Alert, StyleSheet, View } from "react-native";

import Button from "$components/Button";
import Text from "$components/Text";

import SyntaxHighlighter from "react-native-syntax-highlighter";

export default function ButtonDevScreen() {
  const onPress = () => {
    Alert.alert("Button pressed!");
  };

  return (
    <View
      style={{ display: "flex", flexDirection: "column", gap: 12, padding: 12 }}
    >
      <Text text="Button" variant="header-big" />
      <Text text="Renders a styled button." />

      <Text text="Examples" variant="header-default" />

      <SyntaxHighlighter>
        {'<Button text="Large button" size="large" onPress={onPress} />'}
      </SyntaxHighlighter>
      <Button
        text="Large button"
        size="large"
        onPress={onPress}
        style={styles.exampleButtons}
      />

      <SyntaxHighlighter>
        {'<Button text="Medium button" size="medium" onPress={onPress} />'}
      </SyntaxHighlighter>
      <Button
        text="Medium button"
        size="medium"
        onPress={onPress}
        style={styles.exampleButtons}
      />

      <SyntaxHighlighter>
        {'<Button text="Small button" size="small" onPress={onPress} />'}
      </SyntaxHighlighter>
      <Button
        text="Small button"
        size="small"
        onPress={onPress}
        style={styles.exampleButtons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  exampleButtons: {
    marginBottom: 12,
  },
});
