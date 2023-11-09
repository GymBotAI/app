import { Image, StyleSheet, Text, View } from "react-native";

import { colors } from "$styles";

export default function PlanTabs({ text, length, imageSource }) {
  return (
    <View style={styles.rectangle}>
      <View style={styles.contentContainer}>
        <Image source={imageSource} style={styles.image} />
        <Text>{text}</Text>
        <View style={styles.lengthContainer}>
          <View style={styles.lengthBox}>
            <Text style={styles.lengthText}>{length} Days</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    width: "80%",
    backgroundColor: colors.grey.lighter,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  contentContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  lengthContainer: {
    backgroundColor: "darkgray",
    borderRadius: 10,
    marginLeft: 10,
    padding: 5,
  },
  lengthBox: {
    width: 65,
    height: 30,
    borderRadius: 15,
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  lengthText: {
    color: "lightgray",
    fontSize: 16,
  },
});
