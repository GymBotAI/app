import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InputBox from "./InputBox"


export default function Option({ question, value, setValue }) {
  const [name, setName] = useState("Daniel");
  const [showPicker, setShowPicker] = useState(false);

  const show = () => {
    setShowPicker(true);
  };

  const hide = () => {
    setShowPicker(false);
  };

  const handleConfirm = (selectedDate) => {
    setValue(selectedDate);
    hide();
  };

  return (
    <View style={styles.container}>
      <InputBox question={question} onPress={show} value={value.toLocaleDateString()}/>
      <Modal isVisible={showPicker} onBackdropPress={hide} style={styles.modal}>
        <View style={styles.modalContainer}>
          <DateTimePickerModal
            isVisible={showPicker}
            mode="date"
            date={value}
            onConfirm={handleConfirm}
            onCancel={hide}
            minimumDate={new Date(1900, 0, 1)} // Replace with your minimum date
            maximumDate={new Date(2030, 0, 1)} // Replace with your maximum date (e.g., new Date() for today)
          />
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
    backgroundColor: "transparent",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
});
