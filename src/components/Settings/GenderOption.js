import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import InputBox from "./InputBox"

export default function Option({ question, value, setValue }) {
  const [showPicker, setShowPicker] = useState(false);

  const changeVis = () => {
    setShowPicker(!showPicker);
  };

  const handleSelectGender = (gender) => {
    setValue(gender);
    changeVis();
  };

  return (
    <View style={styles.container}>
      <InputBox question={question} onPress={changeVis} value={value}/>

      <Modal isVisible={showPicker} onBackdropPress={changeVis} style={styles.modal}>
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
