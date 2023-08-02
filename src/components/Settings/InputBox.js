import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { circularColour } from "../../styles";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Option({ question, show, value }) {
  return (
      <TouchableOpacity style={styles.item} onPress={show}>
        <Text style={styles.itemText}>{question}</Text>
        <View style={styles.itemLeft}>
          <TextInput
            style={styles.current}
            value={value}
            editable={false}
          />
          <MaterialIcons name="edit" size={26} color="black"/>
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "transparent",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
});
