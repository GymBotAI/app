import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { circularColour } from "../../styles";

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

  console.log(value);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={show}>
        <Text style={styles.itemText}>{question}</Text>
        <View style={styles.itemLeft}>
          <TextInput
          style={styles.current}
          value={value.toLocaleDateString()}
          editable={false} />
          <Image
            source={require("../../../assets/edit.png")}
            style={{ width: 22, height: 22, marginLeft: 15 }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
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
  container: {
    
  },
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
  },
});
