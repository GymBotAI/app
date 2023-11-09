import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "$styles";

import PlanInfoPage from "./PlanInfoPage";
import plans from "./plans";
import PlanTabs from "./PlanTabs";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PlanFinder({ onPlanInfoPageVisibilityChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [PlanInfoPageVisibility, setPlanInfoPageVisibility] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [planInfo, setPlanInfo] = useState({});

  const onScroll = (event) => {
    setIsScrolling(event.nativeEvent.contentOffset.y > 0);
  };

  const filteredPlans = plans.filter((plan) =>
    plan.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePlanInfoPageVisibility = (plan) => {
    setPlanInfoPageVisibility(!PlanInfoPageVisibility);
    setPlanInfo(plan);
    onPlanInfoPageVisibilityChange(!PlanInfoPageVisibility);
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View
        style={[
          styles.searchBarContainer,
          isScrolling ? styles.searchBarHidden : null,
        ]}
      >
        <TextInput
          style={styles.searchBar}
          placeholder="Search plans"
          placeholderTextColor={colors.grey.lighter}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <ScrollView
        style={styles.tabsContainer}
        onScroll={onScroll}
        scrollEventThrottle={16}
        indicatorStyle={colors.black.default}
      >
        {filteredPlans.map((plan, index) => (
          <TouchableOpacity
            onPress={() => togglePlanInfoPageVisibility(plan)}
            key={index}
          >
            <PlanTabs
              text={plan.name}
              length={plan.length}
              data={plan.data}
              imageSource={plan.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {PlanInfoPageVisibility && (
        <PlanInfoPage
          onClose={() => setPlanInfoPageVisibility(false)}
          plan={planInfo}
          image={require("$assets/accountbgdark.jpg")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: colors.white.default,
  },
  tabsContainer: {
    width: "100%",
    marginTop: 60,
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
    color: colors.black.default,
  },
  searchBarHidden: {
    opacity: 0,
  },
});
