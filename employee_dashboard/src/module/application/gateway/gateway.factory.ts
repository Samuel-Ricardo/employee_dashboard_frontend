import { GATEWAY_MODULE } from './gateway.module';
import { GATEWAY_REGISTRY } from './gateway.registry';
import { NodeHttpEmployeeGateway } from './http/node/employee/employee.gateway';

export const GATEWAY_FACTORY = {
  HTTP: {
    NODE: {
      EMPLOYEE: () =>
        GATEWAY_MODULE.get<NodeHttpEmployeeGateway>(
          GATEWAY_REGISTRY.HTTP.NODE.EMPLOYEE,
        ),
    },
  },
};
