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

export default function HeightWeight({ updateSettings, value, setValue, unit, setUnit, setShow, lower, upper, met, imp }) {
  const weightOptions = generateWeightOptions(lower, upper, 1); // Generate weight options from 0 to 300 in increments of 1
  const [showPicker,setShowPicker] = useState(false)
  const [selectedWeight, setSelectedWeight] = useState("")
  const [selectedUnit, setSelectedUnit] = useState(met);

  const changeVisibility = () => {
    setShowPicker(!showPicker);
  };  

  const handleClick = () => {
    setUnit(selectedUnit);
    setValue(selectedWeight);
    changeVisibility();
    // updateSettings();

    setShow(true);
  };

  return (
    <View style={{ flexGrow: 1, overflow: "auto" }}>
    
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
      <TouchableOpacity onPress={changeVisibility}
          style={{
            width: "22%",
            height: 40,
            borderColor: "black",
            marginTop: 40,
            borderBottomWidth: 2,
            paddingHorizontal: 2,
            marginHorizontal: 30,
            paddingLeft: 5,
            flexDirection: 'row'
          }}>
        <TextInput
        style={{fontSize: 18, paddingLeft: 5, marginTop: 8,}}
          editable={false}
          value={value}
        />
        <Text style={{ fontSize: 18, color: "#bababa",  position: "absolute", top: -7.6, left: 32, padding: 20 }}>
            {unit}
          </Text>
        </TouchableOpacity>

      <Modal isVisible={showPicker} onBackdropPress={changeVisibility} style={styles.modal}>
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
              onPress={() => setSelectedUnit(met)}
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
              onPress={() => setSelectedUnit(imp)}
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
    </View>
  );
};

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
