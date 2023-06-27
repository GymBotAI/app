import { View, Text, StyleSheet } from "react-native";

import EditSettings from "../components/EditSettings";
import GymBotNavigation from "../components/navbar";
import ScreenHeader from "../components/ChatHeader";

export default function Settings({ navigation }) {

  return (
    
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >

      <ScreenHeader
        text="Settings"
        minitext='Edit your'
      />
      
      <EditSettings/>
      <GymBotNavigation
      navigation={navigation}
      />
      </View>
  );
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
});