import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { colors } from "$styles";

import BookmarkedTabs from "./BookmarkedTabs";
import PlanInfoPage from "./PlanInfoPage";
import plans from "./plans";

export default function BookmarkedPage({ onPlanInfoPageVisibilityChange }) {
  const [PlanInfoPageVisibility, setPlanInfoPageVisibility] = useState(false);
  const [PlanInfo, setPlanInfo] = useState();
  const bookmarkedPlans = plans.filter((plan) => plan.bookmarked);

  const togglePlanInfoPageVisibility = (plan) => {
    setPlanInfo(plan);
    setPlanInfoPageVisibility(!PlanInfoPageVisibility);
    onPlanInfoPageVisibilityChange(!PlanInfoPageVisibility);
  };

  return (
    <View contentContainerStyle={styles.container}>
      {PlanInfoPageVisibility && (
        <PlanInfoPage
          onClose={() => setPlanInfoPageVisibility(false)}
          plan={PlanInfo}
          image={require("$assets/accountbgdark.jpg")}
        />
      )}
      <ScrollView indicatorStyle={colors.black.default}>
        {bookmarkedPlans.map((plan, index) => (
          <TouchableOpacity onPress={() => togglePlanInfoPageVisibility(plan)}>
            <BookmarkedTabs
              key={index}
              text={plan.name}
              length={plan.length}
              imageSource={plan.image}
              data={plan.description}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: colors.white.default,
  },
});
