export const PORTS_RAW = `user-service:3333 stream-service:3334 chat-service:3335 transaction-service:3336 notification-service:3337 media-service:3338 analytics-service:3339 authentication-service:3340 gateway-service:3341 xp-service:3342"`;

type PortEntry = `${string}:${number}`;

type ExtractServiceNames<T extends string> = T extends `${infer S}:${number}`
  ? S
  : never;
type ExtractPorts<T extends string> = T extends `${string}:${infer P}`
  ? P
  : never;

type PossibleServices = ExtractServiceNames<typeof PORTS_RAW>;
type PossiblePorts = ExtractPorts<typeof PORTS_RAW>;

export interface ServicePorts {
  key: PossibleServices;
  port: PossiblePorts;
}
