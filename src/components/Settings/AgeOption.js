import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InputBox from "./InputBox"
import {minDate, maxDate} from "../../styles";


export default function Option({ question, value, setValue }) {
  const [name, setName] = useState("Daniel");
  const [showPicker, setShowPicker] = useState(false);

  const changeVis = () => {
    setShowPicker(!showPicker);
  };

  const handleConfirm = (selectedDate) => {
    setValue(selectedDate);
    changeVis();
  };

  return (
    <View style={styles.container}>
      <InputBox question={question} onPress={changeVis} value={value.toLocaleDateString()}/>
      <Modal isVisible={showPicker} onBackdropPress={changeVis} style={styles.modal}>
        <View style={styles.modalContainer}>
          <DateTimePickerModal
            isVisible={showPicker}
            mode="date"
            date={value}
            onConfirm={handleConfirm}
            onCancel={changeVis}
            minimumDate={minDate} // Replace with your minimum date
            maximumDate={maxDate} // Replace with your maximum date (e.g., new Date() for today)
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
