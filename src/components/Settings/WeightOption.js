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
import { Picker } from "@react-native-picker/picker";
import { circularColour } from "../../styles";

export default function Option({ question, value, setValue }) {
  const [showPicker, setShowPicker] = useState(false);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [selectedWeight, setSelectedWeight] = useState("");
  const weightOptions = generateWeightOptions(20, 300, 5); // Generate weight options from 20 to 300 in increments of 5

  const show = () => {
    setShowPicker(true);
  };

  const hide = () => {
    setShowPicker(false);
  };

  const handleSelectWeight = (weight) => {
    setValue(weight);
    hide();
  };

  const handleToggleUnit = () => {
    setWeightUnit(weightUnit === "kg" ? "lbs" : "kg");
  };

  console.log(showPicker);

  // Helper function to generate weight options in the given range with a specified step
  function generateWeightOptions(start, end, step) {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(`${i} kg`);
    }
    return options;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={show}>
        <Text style={styles.itemText}>{question}</Text>
        <View style={styles.itemLeft}>
          <TextInput
            style={styles.current}
            value={`${value} ${weightUnit}`}
            editable={false}
          />
          <TouchableOpacity onPress={handleToggleUnit}>
            <Text style={styles.unitText}>
              {weightUnit === "kg" ? "kg" : "lbs"}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Modal isVisible={showPicker} onBackdropPress={hide} style={styles.modal}>
        <View style={styles.modalContainer}>
          <Picker
            selectedValue={selectedWeight}
            onValueChange={(itemValue) => setSelectedWeight(itemValue)}
          >
            {weightOptions.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => handleSelectWeight(selectedWeight)}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
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
  },
  unitText: {
    fontSize: 16,
    color: "#888",
    marginLeft: 10,
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
    height: 200,
  },
  weightOption: {
    paddingVertical: 10,
  },
  weightText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#1260de",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
