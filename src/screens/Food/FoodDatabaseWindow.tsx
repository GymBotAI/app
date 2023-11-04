import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";

import { colors } from "../../components/styles";
import { transparent } from "../../utils/colors";

// Food data
import { foodCategories } from "./data";

import FoodInfoTabs from "./FoodInfoTabs";

import type { Food, FoodCategory } from "./types";

export default function FoodDatabaseWindow({
  category,
  isVisible,
  onClose,
  onFoodPress,
}: {
  category: FoodCategory;
  isVisible: boolean;
  onClose: () => void;
  onFoodPress: (food: number) => void;
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.spacer} />
          <FoodInfoTabs
            foods={foodCategories[category].foods}
            onFoodPress={onFoodPress}
          />
          <View style={styles.spacer} />
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: transparent(colors.black.default, 0.5),
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: colors.white.default,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 24,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  spacer: {
    flex: 1,
  },
});