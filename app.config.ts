const debugLogsConfigFromEnv: NodeJS.Dict<boolean> = Object.fromEntries(
  Object.entries(process.env)
    .filter(([envKey]) => {
      return envKey.startsWith("GYMBOT_DEBUG_LOGS_");
    })
    .map(([envKey, envVal]) => {
      return [envKey.replace("GYMBOT_DEBUG_LOGS_", "").toLowerCase(), !!envVal];
    })
);

/**
 * Enable or disable debug logs for specific
 * parts of the app.
 */
const debugLogs: Record<string, boolean | undefined> = Object.assign(
  debugLogsConfigFromEnv,
  {
    api: false,
  }
);

module.exports = {
  extra: {
    serverAddress: process.env.GYMBOT_SERVER_ADDRESS,
    serverAddressDefault: "wss://gymbot-ai-server.luisafk.repl.co",

    debugLogs,
  },
};
