import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { useRef, useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { circularColour } from "../../styles";

export interface BaseProps {
  label: string;
}

export interface TextProps {
  type: "text";
  value: string;
  onChange: (value: string) => void;
}

export interface DateProps {
  type: "date";
  value: Date | null;
  onChange: (value: Date) => void;
}

export type Props = BaseProps & (TextProps | DateProps);

export default function Option({ value, label, type, onChange }: Props) {
  const textInputRef = useRef<TextInput | null>(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (type == "date") {
          setDatePickerVisibility(true);
        } else {
          textInputRef.current?.focus();
        }
      }}
    >
      <Text style={styles.itemText}>{label}</Text>
      <View style={styles.itemLeft}>
        {type == "date" ? (
          <>
            <DateTimePickerModal
              date={value}
              onConfirm={(date) => {
                setDatePickerVisibility(false);
                onChange(date);
              }}
              onCancel={() => {}}
              isVisible={isDatePickerVisible}
            />
            <Text style={styles.current}>{value?.toLocaleDateString()}</Text>
          </>
        ) : (
          <TextInput
            ref={textInputRef}
            style={styles.current}
            value={value?.toString()}
            onChange={(e) => {
              onChange(e.nativeEvent.text);
            }}
          />
        )}
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
    alignItems: "center",
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
