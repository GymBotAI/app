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
import PlanInfoPage from "./PlanInfoPage";
import plans from "./plans";

export default function PlanFinder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [PlanInfoPageVisibility, setPlanInfoPageVisibility] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [planInfo, setPlanInfo] = useState({});

  const onAddPlan = (plan) => {
    setSelectedPlans([...selectedPlans, plan]);
  };

  const filteredPlans = plans.filter((plan) =>
    plan.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePlanInfoPageVisibility = (circleCount, plan) => {
    setPlanInfoPageVisibility(!PlanInfoPageVisibility);
    setPlanInfo(plan);
  };

  return (
   <View style={styles.container}>
     <View style={styles.overlay} />
     <View style={styles.searchBarContainer}>
       <TextInput
         style={styles.searchBar}
         placeholder="Search plans"
         placeholderTextColor="#888"
         onChangeText={(text) => setSearchQuery(text)}
       />
     </View>
     <ScrollView style={[styles.tabsContainer, PlanInfoPageVisibility ? { position: "absolute" } : {}]}>
       {filteredPlans.map((plan, index) => (
         <TouchableOpacity
           onPress={() => togglePlanInfoPageVisibility(plan.length, plan)}
           key={index}
         >
           <PlanTabs
             text={plan.name}
             length={plan.length}
             data={plan.data}
             imageSource={require("../../../assets/accountbgdark.jpg")}
           />
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
         plan={planInfo}
       />
     )}
   </View>
 );
}

const windowWidth = Dimensions.get("window").width; //IDK why but if u want symetry, you have to offset 20 px
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
