import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Settings({ navigation }) {

  return (
    <View style={styles.container}>
    <Text>Hi</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
  },
});
