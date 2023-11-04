import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { AppContext } from "../../context/AppContext";

import { FontAwesome5 } from "@expo/vector-icons";

import WorkoutStats from "./WorkoutStats";
import WorkoutList from "./WorkoutList";
import WorkoutPreview from "./WorkoutPreview";

import type { NavigationProp } from "../../types/navigation";

export default function Home({ navigation }: { navigation: NavigationProp }) {
  const { userData } = useContext(AppContext);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScrollView style={styles.container}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <Text style={styles.greetingText}>Hello, {userData.name}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings", userData);
            }}
          >
            <FontAwesome5 name="cog" size={28} color="#333" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 30,
            marginBottom: -10,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <WorkoutStats
            completedWorkouts={20}
            totalWorkouts={30}
            goalPercentage={66}
          />
        </View>
        {/* <TalkToGymBotSection navigation={navigation}/> */}

        <WorkoutPreview />

        <WorkoutList navigation={navigation} />
      </ScrollView>

      <StatusBar barStyle="dark-content" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
});
