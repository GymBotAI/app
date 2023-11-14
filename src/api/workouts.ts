import { httpServerAddr } from "$api/address";
import { debugLogs } from "$api/debug-logs";

/**
 * Whether or not to log debug messages.
 */
const debug: boolean = __DEV__ && debugLogs.auth;

export async function generateWorkout(data: {
  duration: number;
  bodypart: string;
  notes: string | null;
}) {
  if (debug) {
    console.debug("Generating workout:", data);
  }

  if (data.duration < 5) {
    throw new Error("Duration must be at least 5 minutes");
  }

  if (data.bodypart.length < 2) {
    throw new Error("Body part must be at least 2 characters");
  }

  return await (
    await fetch(`${httpServerAddr}/workout`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();

  // TODO: use Zod to validate response
}
