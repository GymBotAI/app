import React, { useState, useRef, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";

function generateWeightOptions(start, end, step) {
  const options = [];
  for (let i = start; i <= end; i += step) {
    options.push(`${i}`);
  }
  return options;
}

export default function HeightWeight({
  value,
  setValue,
  unit,
  setUnit,
  setShow,
  lower,
  upper,
  met,
  imp,
  conversion,
}) {
  const weightOptions = generateWeightOptions(lower, upper, 1); // Generate weight options from 0 to 300 in increments of 1
  const [showPicker, setShowPicker] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(met);

  const changeVisibility = () => {
    setShowPicker(!showPicker);
  };

  const handleClick = () => {
    setUnit(selectedUnit);
    setValue(selectedWeight);
    changeVisibility();
    setShow(true);
  };

  handleMetChange = () => {
    console.log("This is happening!");
    let roundedWeight = selectedWeight;
    if (roundedWeight === "") {
      roundedWeight = 30;
    }
    console.log(roundedWeight);
    if (selectedUnit === met) {
      setSelectedUnit(imp);
      roundedWeight = Math.round(roundedWeight * conversion).toString();
    } else {
      setSelectedUnit(met);
      roundedWeight = Math.round(roundedWeight / conversion).toString();
    }
    setSelectedWeight(roundedWeight);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={changeVisibility}
        style={{ paddingTop: 5, paddingBottom: 30}}
      >
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{value}</Text>
          <Text style={styles.unitText}>{unit}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        isVisible={showPicker}
        onBackdropPress={changeVisibility}
        style={styles.modal}
      >
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
              onPress={handleMetChange}
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
              onPress={handleMetChange}
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
  container: {
    flex: 1,
    justifyContent: "top", // Vertically centers the input within the container
  },
  inputContainer: {
    flexDirection: "row", // Puts the input and unit side by side horizontally
    alignItems: "center", // Centers the input and unit vertically within the container
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginHorizontal: 35,
    marginTop: 40,
    paddingBottom: 5, // Adds padding to the bottom to avoid overlapping with the unit text
    width: 75,
  },
  input: {
    fontSize: 18,
    flex: 1, // Takes all available space in the row
    paddingLeft: 4,
  },
  unitText: {
    fontSize: 18,
    color: "#bababa",
    paddingRight: 5,
  },
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
