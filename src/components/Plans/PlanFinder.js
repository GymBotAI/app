import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import PlanTabs from "./PlanTabs";
import PlanInfoPage from "./PlanInfoPage"

export default function PlanFinder({ onClose }) {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ PlanInfoPageVisibility, setPlanInfoPageVisibility ] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState([]);

  const onAddPlan = (plan) => {
   setSelectedPlans([...selectedPlans, plan]);
 };

  const rectangles = [
    { name: "Get Abs", length: 2, data: "Situps X 10 \nRest 30s" },
    { name: "Beat Your Pr", length: 8, data: "Hey\n\n"},
    { name: "Rectangle 3", length: 3 },
  ];

  const filteredRectangles = rectangles.filter((rectangle) =>
    rectangle.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePlanInfoPageVisibility = (circleCount) => {
   setPlanInfoPageVisibility(!PlanInfoPageVisibility);
 };

  return (
   <View style={styles.container}>
     <View style={styles.overlay} />
     {!PlanInfoPageVisibility && (
       <TouchableOpacity style={styles.closeButton} onPress={onClose}>
         <Text style={styles.closeButtonText}>X</Text>
       </TouchableOpacity>
     )}
     <View style={styles.searchBarContainer}>
       <TextInput
         style={styles.searchBar}
         placeholder="Search rectangles"
         placeholderTextColor="#888"
         onChangeText={(text) => setSearchQuery(text)}
       />
     </View>
     <ScrollView style={styles.tabsContainer}>
       {filteredRectangles.map((rectangle, index) => (
         <TouchableOpacity
           onPress={() => togglePlanInfoPageVisibility(rectangle.length)}
           key={index}
         >
           <PlanTabs text={rectangle.name} length={rectangle.length} data={rectangle.data} viewData={false} />
         </TouchableOpacity>
       ))}
     </ScrollView>
     {PlanInfoPageVisibility && (
        <PlanInfoPage
          onClose={togglePlanInfoPageVisibility}
          onAddPlan={onAddPlan}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          fillPercentage={50}
        />
      )}
   </View>
 );
}

const windowWidth = Dimensions.get("window").width - 20; //IDK why but if u want symetry, you have to offset 20 px
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
  },
  tabsContainer: {
    width: "100%",
    position: "absolute",
    top: 80,
  },
  searchBarContainer: {
    position: "absolute",
    top: 20,
    left: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: "#000",
  },
});