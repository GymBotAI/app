import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "$styles";

import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const TalkToGymBotSection = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Chat");
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Use GymBot</Text>
          <AntDesign
            name="message1"
            size={24}
            color={colors.grey.lightest}
            style={styles.icon}
          />
        </View>
        <Text style={styles.subtitleText}>
          Our specialized AI will help you craft personalized workout plans that
          unlock your true potential
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Design With GymBot</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue.default,
    width: "93%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  textContainer: {
    marginBottom: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5, // Adjust the value as needed
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.white.default,
    marginRight: 5,
  },
  icon: {
    marginLeft: 5, // Adjust the value as needed
  },
  subtitleText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: colors.white.default,
  },
  button: {
    alignItems: "center",
    paddingHorizontal: 20,
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.grey.lightest,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black.default,
  },
});

export default TalkToGymBotSection;
