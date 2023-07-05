import { View, StatusBar } from "react-native";

import SignUpContainer from "../components/signup/SignUpContainer";
import SignUpHeader from "../components/signup/SignUpHeader";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <SignUpHeader text="GymBot" minitext="Welcome to" />
      <SignUpContainer />
      <View style={{paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 0,}}/>

    </View>
  );
}
