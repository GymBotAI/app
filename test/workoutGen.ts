import "$utils/nodePolyfill";

import { generateWorkout } from "$api/workouts";

// Generate an example workout and log it to the console

generateWorkout({
  duration: 10,
  bodypart: "chest",
  notes: null,
}).then(console.log);
