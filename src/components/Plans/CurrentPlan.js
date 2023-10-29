import React from "react";
import { View, Text } from "react-native";

export default function CurrentPlan({ plan, updatePlanInfo }) {
  const handleRemovePlan = (planName) => {
    const updatedPlans = plans.map((plan) =>
      plan.name === planName ? { ...plan, added: false } : plan
    );

    updatePlanInfo(updatedPlans);
  };

  return (
    <View>
      <Text>{plan.name}</Text>
      <Text>{plan.length} days</Text>
      <Text>{plan.data}</Text>
      <button onClick={() => handleRemovePlan(plan.name)}>Remove Plan</button>
    </View>
  );
}
