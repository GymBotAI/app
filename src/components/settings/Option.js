import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
} from "react-native";

import { circularColour } from "../../styles";

export default function Option({ question, value, setValue }) {
  const [name, setName] = useState("Daniel");

  return (

    
    <View style={styles.item}>
      <Text style={styles.itemText}>{question}</Text>
      <View style={styles.itemLeft}>
        <Text style={styles.current}>Daniel</Text>
        <Image
              source={require("../../../assets/edit.png")}
              style={{width: 22, height: 22, marginLeft: 15,}}
              resizeMode="contain"
            />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#FFF",
      padding: 15,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemText: {
      maxWidth: "100%",
      fontSize: 16,
    },
    itemLeft: {
      display: 'flex',
      flexDirection: 'row',
    },
    current: {
      color: 'blue',
      fontSize: 16,
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: circularColour,
      borderWidth: 2,
      borderRadius: 5,
    },
  });  