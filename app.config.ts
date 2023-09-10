module.exports = {
  extra: {
    serverAddress: process.env.GYMBOT_SERVER_ADDRESS,
    serverAddressDefault: "wss://gymbot-ai-server.luisafk.repl.co",

    /**
     * Enable or disable debug logs for specific
     * parts of the app.
     *
     * @type {Record<string, boolean | undefined>}
     */
    debugLogs: {
      api: false,
    },
  },
};
