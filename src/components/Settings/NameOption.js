import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  TextInput,
} from "react-native";
import { circularColour } from "../../styles";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Option({ question, value, setValue }) {
  const [name, setName] = useState("Daniel");
  const textInputRef = useRef(null);

  const handleButtonPress = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleButtonPress}>
      <Text style={styles.itemText}>{question}</Text>
      <View style={styles.itemLeft}>
        <TextInput
          ref={textInputRef}
          style={styles.current}
          value={value}
          onChange={setValue}
        />
        <MaterialIcons name="edit" size={26} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  itemText: {
    maxWidth: "100%",
    fontSize: 16,
  },
  itemLeft: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  current: {
    color: "#1260de",
    fontSize: 16,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: circularColour,
    borderWidth: 2,
    borderRadius: 5,
  },
});
