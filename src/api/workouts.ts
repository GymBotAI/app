import { httpServerAddr } from "$api/address";
import { debugLogs } from "$api/debug-logs";

/**
 * Whether or not to log debug messages.
 */
const debug: boolean = __DEV__ && debugLogs.auth;

export async function generateWorkout(data: {
  equipment: string[];
  goal: string;
  subgoal: string;
  duration: number;
  notes: string | null;
}) {
  if (debug) {
    console.debug("Generating workout:", data);
  }

  if (data.equipment.length < 1) {
    throw new Error("Equipment must contain at least 1 item");
  }

  if (data.duration < 5) {
    throw new Error("Duration must be at least 5 minutes");
  }

  if (data.goal.length < 2) {
    throw new Error("Goal must be at least 2 characters");
  }
  if (data.subgoal.length < 2) {
    throw new Error("Subgoal must be at least 2 characters");
  }

  const resp = await fetch(`${httpServerAddr}/workout`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (resp.ok) {
    return await resp.json();
  }

  throw new Error(
    `Workout generation failed with status ${
      resp.status
    }: "${await resp.text()}"`
  );

  // TODO: use Zod to validate response
}
