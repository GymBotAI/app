import { Dimensions, StyleSheet, Text, View } from "react-native";

import { colors } from "$styles";

const { width, height } = Dimensions.get("window");
const fontSize = Math.min(width, height) * 0.05;
const headerHeight = fontSize * 4.8;
console.log(headerHeight);

export default function ScreenHeader({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    height: headerHeight,
    borderWidth: 0.5,
    borderColor: colors.grey.lighter,
  },
  backButton: {
    paddingRight: 10,
  },
  title: {
    fontSize: fontSize,
    fontWeight: "bold",
    color: colors.black.lighter,
  },
});
