export interface AppConfig {
  extra: {
    serverAddress: string | undefined;
    serverAddressDefault: `wss://${string}` | `ws://${string}`;

    debugLogs: any; // TODO
  };
}
