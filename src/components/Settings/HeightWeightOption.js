import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import InputBox from "./InputBox"

export default function Option({
  question,
  value,
  setValue,
  unit,
  upper,
  lower,
  met,
  imp,
  conversion,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const [weightUnit, setWeightUnit] = useState(unit);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedWeight, setSelectedWeight] = useState(value);
  const weightOptions = generateWeightOptions(lower, upper, 1); // Generate weight options from 0 to 300 in increments of 1

  const show = () => {
    setSelectedWeight(value); // Set selectedWeight to the current value when opening the modal
    setSelectedUnit(weightUnit);
    setShowPicker(true);
  };

  const hide = () => {
    setShowPicker(false);
  };
  4;

  const handleClick = (weight) => {
    setWeightUnit(selectedUnit);
    setValue(weight);
    hide();
  };

  // Helper function to generate weight options in the given range with a specified step
  function generateWeightOptions(start, end, step) {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(`${i}`);
    }
    return options;
  }

  handleUnitChange = () => {
    console.log("This is happening!");
    if (selectedUnit === met) {
      setSelectedUnit(imp);
    } else {
      setSelectedUnit(met);
    }
  };

  return (
    <View style={styles.container}>
    <InputBox question={question} onPress={show} value={`${value} ${weightUnit}`}/>
    
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

          <View style={styles.unitContainer}>
            <TouchableOpacity
              style={[
                styles.unitButton,
                selectedUnit === met && styles.activeUnitButton,
              ]}
              onPress={handleUnitChange}
            >
              <Text
                style={[
                  styles.unitButtonText,
                  selectedUnit === met && styles.activeUnitButtonText,
                ]}
              >
                {met}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.unitButton,
                selectedUnit === imp && styles.activeUnitButton,
              ]}
              onPress={handleUnitChange}
            >
              <Text
                style={[
                  styles.unitButtonText,
                  selectedUnit === imp && styles.activeUnitButtonText,
                ]}
              >
                {imp}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => handleClick(selectedWeight, selectedUnit)}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
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
    padding: 5,
    paddingHorizontal: 20,
    height: 375,
  },
  unitContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  unitButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  unitButtonText: {
    fontSize: 16,
    color: "#888",
  },
  activeUnitButton: {
    backgroundColor: "#1260de",
  },
  activeUnitButtonText: {
    color: "#FFF",
  },
  confirmButton: {
    backgroundColor: "#1260de",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
