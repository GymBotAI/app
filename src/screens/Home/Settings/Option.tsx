import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "$styles";

import { MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export interface BaseProps {
  label: string;
}

export interface TextProps {
  type: "text";
  value: string;
  onChange: (value: string) => void;
}

export interface NumberProps {
  type: "number";
  value: string;
  onChange: (value: string) => void;
}

export interface DateProps {
  type: "date";
  value: Date | null;
  onChange: (value: Date) => void;

  min?: Date;
  max?: Date;
}

export type Props = BaseProps & (TextProps | NumberProps | DateProps);

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
              onCancel={() => {
                setDatePickerVisibility(false);
              }}
              isVisible={isDatePickerVisible}
            />
            <Text style={styles.current}>{value?.toLocaleDateString()}</Text>
          </>
        ) : (
          <TextInput
            ref={textInputRef}
            style={styles.current}
            value={value?.toString()}
            keyboardType={type == "number" ? "numeric" : "default"}
            onChange={(e) => {
              onChange(e.nativeEvent.text);
            }}
          />
        )}
        <MaterialIcons name="edit" size={26} color={colors.black.lighter} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white.default,
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
    color: colors.blue.default,
    fontSize: 16,
    marginRight: 15,
  },
});
