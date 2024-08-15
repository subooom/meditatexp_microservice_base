import { PORTS_RAW, ServicePorts } from './interfaces/service-ports';

export const APP_URL = 'https://meditatexp.com';

export const SERVICE_PORTS: ServicePorts[] = PORTS_RAW.split(' ').map(
  (item) => {
    const parts = item.split(':');
    return {
      key: parts[0],
      port: parseInt(parts[1], 10),
    };
  },
) as unknown as ServicePorts[];

export const SERVICE_NAMES = {
  NOTIFICATION: 'NOTIFICATION',
  CHAT: 'CHAT',
  ANALYTICS: 'ANALYTICS',
  XP: 'XP',
};

export const GET_SERVICE_PORT = (service_name: string) => {
  let serviceNameParsed = service_name.toLowerCase() + '-service';

  const found = SERVICE_PORTS.filter((item) => item.key === serviceNameParsed);
  if (!found.length) return null;
  return parseInt(found[0].port, 10);
};
