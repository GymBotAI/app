import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import { colors } from "$styles";

import Modal from "react-native-modal";

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
    if (selectedUnit === met) {
      setSelectedUnit(imp);
    } else {
      setSelectedUnit(met);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={changeVisibility}
        style={{ paddingTop: 5, paddingBottom: 30 }}
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
    borderBottomColor: colors.black.default,
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
    color: "magenta",
    paddingRight: 5,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: colors.white.default,
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
    backgroundColor: "magenta",
    marginRight: 10,
  },
  unitButtonText: {
    fontSize: 16,
    color: "magenta",
  },
  activeUnitButton: {
    backgroundColor: "magenta",
  },
  activeUnitButtonText: {
    color: "magenta",
  },
  confirmButton: {
    backgroundColor: "magenta",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  confirmButtonText: {
    color: "magenta",
    fontSize: 18,
    fontWeight: "bold",
  },
});
