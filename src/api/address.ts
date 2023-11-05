export type BaseServerAddress = `s://${string}` | `://${string}`;
export type WsServerAddress = `ws://${string}` | `wss://${string}`;
export type HttpServerAddress = `http://${string}` | `https://${string}`;

/**
 * The base address of the GymBot AI server.
 * Must start with `s://` or `://`.
 * See `app.config.ts` for more information.
 *
 * @example "s://example.com"
 * @example "://example.com"
 */
export const baseServerAddr =
  (process.env.EXPO_PUBLIC_GYMBOT_SERVER_ADDRESS as BaseServerAddress) ||
  "://openhoster.ddns.net:3001";

/**
 * The WebSocket address of the GymBot AI server.
 *
 * @see baseServerAddr
 * @example "wss://example.com"
 * @example "ws://example.com"
 */
export const wsServerAddr = ("ws" + baseServerAddr) as WsServerAddress;

/**
 * The HTTP address of the GymBot AI server.
 *
 * @see baseServerAddr
 * @example "https://example.com"
 * @example "http://example.com"
 */
export const httpServerAddr = ("http" + baseServerAddr) as HttpServerAddress;
