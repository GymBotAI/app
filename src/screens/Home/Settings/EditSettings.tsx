import { useState, useContext } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
  Button,
} from "react-native";

import { AppContext } from "../../../context";

import { colors } from "../../../components/styles";

import { supabase } from "../../../api/supabase";

import Option from "./Option";

import {
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
} from "../../../components/styles";

import type {
  NavigationProp,
  NavigationScreens,
} from "../../../types/navigation";

export default function Settings({
  navigation,
  initialData,
}: {
  navigation: NavigationProp;
  initialData: NavigationScreens["Settings"];
}) {
  const { session } = useContext(AppContext);

  const [name, setName] = useState(initialData.name || "");
  const [bday, setBday] = useState<Date | null>(
    new Date(initialData.birthday) || null
  );
  const [gender, setGender] = useState(initialData.gender || "");
  const [weight, setWeight] = useState(initialData.weight?.toString() || "");
  const [height, setHeight] = useState(initialData.height?.toString() || "");

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Option label="Name" value={name} onChange={setName} type="text" />
      <Option label="Age" value={bday} onChange={setBday} type="date" />
      <Option label="Gender" value={gender} onChange={setGender} type="text" />
      <Option
        label="Weight"
        value={weight?.toString()}
        onChange={setWeight}
        type="number"
      />
      <Option
        label="Height"
        value={height?.toString()}
        onChange={setHeight}
        type="number"
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          Keyboard.dismiss();

          const weightNum = parseInt(weight);
          const heightNum = parseInt(height);

          if (weightNum < minWeight || weightNum > maxWeight) {
            Alert.alert(
              "Invalid weight",
              `Weight must be between ${minWeight} and ${maxWeight}`
            );
            return;
          }

          if (heightNum < minHeight || heightNum > maxHeight) {
            Alert.alert(
              "Invalid height",
              `Height must be between ${minHeight} and ${maxHeight}`
            );
            return;
          }

          supabase
            .from("users")
            .update({
              name,
              gender,
              birthday: bday.toString(),
              weight: weightNum,
              height: heightNum,
            })
            .eq("id", session.user.id)
            .single()
            .then(({ error }) => {
              if (error) {
                console.log(error);
              } else {
                navigation.navigate("Home");
              }
            });
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white.default,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: colors.blue.default,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 8,
    marginTop: 12,
  },
});
