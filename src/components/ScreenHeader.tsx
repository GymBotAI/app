import { StyleSheet, Text, View, Dimensions } from "react-native";

import { colors } from "$styles";

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
    height: 90,
    borderWidth: 0.5,
    borderColor: colors.grey.lighter,
  },
  backButton: {
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black.lightest,
  },
});
