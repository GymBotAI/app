import type { AppConfig } from "./src/types/app-config.cjs";

if (process.env.GYMBOT != "1") {
  throw new Error("Missing env vars");
}

import { debugLogsModules } from "./src/types/app-config.cjs";

/**
 * Object containing the debug logs config for each module.
 */
const debugLogs = {
  ...Object.fromEntries(debugLogsModules.map((module) => [module, false])),
  ...Object.fromEntries(
    (process.env.GYMBOT_DEBUG_LOGS || "")
      .split(",")
      .map((s) => [s.trim(), true] as const)
      .filter((s) => s[0].length > 0 && debugLogsModules.includes(s[0] as any))
  ),
} as (typeof AppConfig)["extra"]["debugLogs"];

// Log debug logs config
setTimeout(() => {
  for (const [module, enabled] of Object.entries(debugLogs)) {
    console.debug(
      `Debug logs for ${module}\t are ${enabled ? "enabled" : "disabled"}`
    );
  }
}, 5000);

export default {
  extra: {
    serverAddress: process.env.GYMBOT_SERVER_ADDRESS,
    serverAddressDefault: "s://gymbot-ai-server.luisafk.repl.co",

    debugLogs,
  },
} satisfies typeof AppConfig;
