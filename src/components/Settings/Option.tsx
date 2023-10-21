import { TouchableOpacity, Text, TextInput, View, StyleSheet } from "react-native";
import { useRef } from "react";

import { MaterialIcons } from "@expo/vector-icons";

import { circularColour } from "../../styles";

export default function Option({
  value,
  label,
  onChange
}: {
  value: string;
  label: string;
  onChange: (value: string) => void;
}) {
  const textInputRef = useRef<TextInput | null>(null);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={(e) => {
        textInputRef.current?.focus();
      }}
    >
      <Text style={styles.itemText}>{label}</Text>
      <View style={styles.itemLeft}>
        <TextInput
          ref={textInputRef}
          style={styles.current}
          value={value}
          onChange={(e) => {
            onChange(e.nativeEvent.text);
          }}
        />
        <MaterialIcons name="edit" size={26} color="black" />
      </View>
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
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: circularColour,
    borderWidth: 2,
    borderRadius: 5,
  },
});