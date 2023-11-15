import "$utils/nodePolyfill";

import { generateWorkout } from "$api/workouts";

// Generate an example workout and log it to the console

generateWorkout({
  duration: 20,
  equipment: ["dumbbells", "running machine"],
  goal: "Gain more muscle",
  subgoal: "Arm strength",
  notes: "Slight discomfort in chest, happening for three days",
}).then(console.log);
