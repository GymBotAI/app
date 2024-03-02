export const debugLogsModules = ['auth', 'chat'] as const;
export type DebugLogsModule = (typeof debugLogsModules)[number];

/**
 * The raw value of the `GYMBOT_DEBUG_LOGS` env var, trimmed.
 * If the env var is not set, this is an empty string.
 */
const rawDebugLogs = process.env.EXPO_PUBLIC_GYMBOT_DEBUG_LOGS?.trim() || '';

/**
 * Object containing the debug logs config for each module.
 *
 * The default value for each module is `false`,
 * unless the module name is present in the `GYMBOT_DEBUG_LOGS` env var.
 */
export const debugLogs = {
  ...Object.fromEntries(debugLogsModules.map((module) => [module, false])),
  ...Object.fromEntries(
    rawDebugLogs == '*'
      ? debugLogsModules.map((module) => [module, true])
      : rawDebugLogs
          .split(',')
          .map((s) => [s.trim(), true] as const)
          .filter(
            (s) => s[0].length > 0 && debugLogsModules.includes(s[0] as any),
          ),
  ),
} as Record<DebugLogsModule, boolean>;

// Log debug logs config
if (!process.env.GYMBOT_HAS_LOGGED_DEBUG_LOGS) {
  setTimeout(() => {
    for (const [module, enabled] of Object.entries(debugLogs)) {
      console.debug(
        `Debug logs for ${module}\t are ${enabled ? 'enabled' : 'disabled'}`,
      );
    }
  }, 3000);

  process.env.GYMBOT_HAS_LOGGED_DEBUG_LOGS = '1';
}
