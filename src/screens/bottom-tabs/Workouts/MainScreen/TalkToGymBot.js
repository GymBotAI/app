import { StyleSheet, TouchableOpacity, View } from "react-native";

import { colors } from "$styles";

import { AntDesign } from "@expo/vector-icons";

import { talkTo } from "./.styles";
import Text from "$components/Text";

export default function TalkToGymBotSection ({ navigation }) {
  const onPress = () => {
    navigation.navigate("Chat");
  };

  return (
    <View style={talkTo.container}>
        <View style={talkTo.titleWrapper}>
          <Text text='Talk To GymBot' variant="header-big" style={{marginRight: 10, color: colors.white.default}}/>
          <AntDesign
            name="message1"
            size={24}
            color={colors.grey.lightest}
          />
        </View>
        <Text text='Our special AI will give you personalized workout tips and address any and all of your fitness concerns'
        size="small" style={{color: colors.white.default}}/>

      <TouchableOpacity style={talkTo.button} onPress={onPress}>
        <Text text='Take Me!' size="medium" variant="header-default"/>
      </TouchableOpacity>
    </View>
  );
};
