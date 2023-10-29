import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BookmarkedTabs from "./BookmarkedTabs";
import plans from "./plans";
import PlanInfoPage from "./PlanInfoPage";

const BookmarkedPage = () => {
  const [PlanInfoPageVisibility, setPlanInfoPageVisibility] = useState(false);
  const bookmarkedPlans = plans.filter((plan) => plan.bookmarked);

  const togglePlanInfoPageVisibility = (plan) => {
    setPlanInfoPageVisibility(!PlanInfoPageVisibility);
    setPlanInfo(plan);
  };

  return (
    <View contentContainerStyle={styles.container}>
      <ScrollView>
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
      {PlanInfoPageVisibility && (
        <PlanInfoPage
          onClose={() => setPlanInfoPageVisibility(false)}
          plan={plan}
          image={require("../../../assets/accountbgdark.jpg")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default BookmarkedPage;
