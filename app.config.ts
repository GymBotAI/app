import type { AppConfig } from "./src/types/app-config";

if (process.env.GYMBOT != "1" && process.platform != "win32") {
  throw new Error("Missing env vars. Did you forget to run `source .env`?");
}

const debugLogsModules = ["api"] as const;
type DebugLogsModule = (typeof debugLogsModules)[number];

const debugLogsConfigFromEnv = Object.fromEntries(
  Object.entries(process.env)
    .filter(([envKey]) => {
      return new RegExp(
        `GYMBOT_DEBUG_LOGS_(?:${debugLogsModules
          .map((s) => s.toUpperCase())
          .join("|")})`
      ).test(envKey);
    })
    .map(([envKey, envVal]) => {
      return [envKey.replace("GYMBOT_DEBUG_LOGS_", "").toLowerCase(), !!envVal];
    })
) as Record<DebugLogsModule, boolean>;

const defaultDebugLogs: Record<DebugLogsModule, boolean> = {
  api: false,
};

/**
 * Enable or disable debug logs for specific
 * parts of the app.
 */
const debugLogs: Record<DebugLogsModule, boolean> = Object.assign(
  debugLogsConfigFromEnv,
  defaultDebugLogs
);

// Log debug logs config
setTimeout(() => {
  for (const [module, enabled] of Object.entries(debugLogs)) {
    if (enabled) {
      console.debug(`Debug logs for ${module}\t are enabled`);
    }
  }
}, 5000);

module.exports = {
  extra: {
    serverAddress: process.env.GYMBOT_SERVER_ADDRESS,
    serverAddressDefault: "s://gymbot-ai-server.luisafk.repl.co",

    debugLogs,
  },
} satisfies AppConfig;
