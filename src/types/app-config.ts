import type { BaseServerAddress } from "../app-config";

export interface AppConfig {
  extra: {
    serverAddress: string | undefined;
    serverAddressDefault: BaseServerAddress;

    debugLogs: any; // TODO
  };
}
