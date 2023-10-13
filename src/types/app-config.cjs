/**
 * The type for the app's config in `app.config.ts`.
 *
 * @typedef {{
 *  extra: {
 *    serverAddress: string | undefined,
 *    serverAddressDefault: import('../api/address').BaseServerAddress,
 *    debugLogs: Record<DebugLogsModule, boolean>;
 *  }
 * }} AppConfig
 * @type {AppConfig}
 */
let AppConfig;

/**
 * @typedef {(typeof debugLogsModules)[number]} DebugLogsModule
 * @type {DebugLogsModule}
 */
let DebugLogsModule;

const debugLogsModules = /** @type {const} */ (["api", "auth"]);

module.exports = {
  AppConfig,
  DebugLogsModule,
  debugLogsModules,
};
