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
import { circularColour } from "../../styles";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Option({ question, value, setValue }) {
  const [showPicker, setShowPicker] = useState(false);

  const show = () => {
    setShowPicker(true);
  };

  const hide = () => {
    setShowPicker(false);
  };

  const handleSelectGender = (gender) => {
    setValue(gender);
    hide();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={show}>
        <Text style={styles.itemText}>{question}</Text>
        <View style={styles.itemLeft}>
          <TextInput style={styles.current} value={value} editable={false} />
          <MaterialIcons name="edit" size={26} color="black" />
        </View>
      </TouchableOpacity>
      <Modal isVisible={showPicker} onBackdropPress={hide} style={styles.modal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => handleSelectGender("Male")}
          >
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => handleSelectGender("Female")}
          >
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => handleSelectGender("Other")}
          >
            <Text style={styles.genderText}>Other</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => handleSelectGender("Prefer Not to Say")}
          >
            <Text style={styles.genderText}>Prefer Not to Say</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    paddingBottom: 35,
  },
  genderOption: {
    paddingVertical: 10,
  },
  genderText: {
    fontSize: 18,
  },
});
