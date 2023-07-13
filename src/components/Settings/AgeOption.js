import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";


import { circularColour } from "../../styles";

export default function Option({ question, value, setValue }) {
  const [name, setName] = useState("Daniel");
  const [showPicker, setShowPicker] = useState(false);

  const show = () => {
    console.log("This is happening")
    setShowPicker(true);
  }

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      setValue(selectedDate)
    }
  };


  console.log(showPicker)
  return (

    
    <TouchableOpacity style={styles.item} onPress={show}>
      <Text style={styles.itemText}>{question}</Text>
      <View style={styles.itemLeft}>
        <TextInput style={styles.current} value={value} onChange={setValue}/>
        <Image
              source={require("../../../assets/edit.png")}
              style={{width: 22, height: 22, marginLeft: 15,}}
              resizeMode="contain"
            />
        </View>
        {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={value}
          onChange={onChange}
          minimumDate={new Date(1900, 0, 1)} // Replace with your minimum date
          maximumDate={new Date(2030, 0, 1)} // Replace with your maximum date (e.g., new Date() for today)
        />
      )}
      
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#FFF",
      padding: 15,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    itemText: {
      maxWidth: "100%",
      fontSize: 16,
    },
    itemLeft: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: "wrap",
    },
    current: {
      color: '#1260de',
      fontSize: 16,
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: circularColour,
      borderWidth: 2,
      borderRadius: 5,
    },
  });  