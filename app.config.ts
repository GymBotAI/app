module.exports = {
  extra: {
    serverAddress: process.env.GYMBOT_SERVER_ADDRESS,
    serverAddressDefault: "wss://gymbot-ai-server.luisafk.repl.co",

    /** @type {Record<string, boolean | undefined>} */
    debugLogs: {
      api: false,
    },
  },
};
