import { View, StatusBar, StyleSheet, Text} from "react-native";

import EditSettings from "../components/Settings/EditSettings";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Settings({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{"Settings"}</Text>
        <View style={styles.bellContainer}>
          <FontAwesome5 name = "bell" size = {30} colour = "#8ed9de" />
        </View>
      </View>
      <EditSettings navigation={navigation}/>
      <StatusBar barStyle="dark" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    height: 90,
    borderWidth: 0.5,
    borderColor: "#c9c9c9",
  },
 icon: {
  name: "bell",
  size: 30,
  colour: "#8ed9de",
 },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingLeft: 30,
  },
  bellContainer: {
    paddingRight: 15,
  },
});
