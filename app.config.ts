import type { AppConfig } from "./src/types/app-config.cjs";

if (process.env.GYMBOT != "1") {
  throw new Error("Missing env vars");
}

import { debugLogsModules } from "./src/types/app-config.cjs";

/**
 * The raw value of the `GYMBOT_DEBUG_LOGS` env var, trimmed.
 * If the env var is not set, this is an empty string.
 */
const rawDebugLogs = process.env.GYMBOT_DEBUG_LOGS?.trim() || "";

/**
 * Object containing the debug logs config for each module.
 *
 * The default value for each module is `false`,
 * unless the module name is present in the `GYMBOT_DEBUG_LOGS` env var.
 */
const debugLogs = {
  ...Object.fromEntries(debugLogsModules.map((module) => [module, false])),
  ...Object.fromEntries(
    rawDebugLogs == "*"
      ? debugLogsModules.map((module) => [module, true])
      : rawDebugLogs
          .split(",")
          .map((s) => [s.trim(), true] as const)
          .filter(
            (s) => s[0].length > 0 && debugLogsModules.includes(s[0] as any)
          )
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
