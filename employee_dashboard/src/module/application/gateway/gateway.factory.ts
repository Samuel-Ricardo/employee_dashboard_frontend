import { GATEWAY_MODULE } from './gateway.module';
import { GATEWAY_REGISTRY } from './gateway.registry';
import { AxiosHttpEmployeeGateway } from './http/axios/emplpoyee/employee.gateway';
import { NodeHttpEmployeeGateway } from './http/node/employee/employee.gateway';

export const GATEWAY_FACTORY = {
  HTTP: {
    NODE: {
      EMPLOYEE: () =>
        GATEWAY_MODULE.get<NodeHttpEmployeeGateway>(
          GATEWAY_REGISTRY.HTTP.NODE.EMPLOYEE,
        ),
    },

    AXIOS: {
      EMPLOYEE: () =>
        GATEWAY_MODULE.get<AxiosHttpEmployeeGateway>(
          GATEWAY_REGISTRY.HTTP.AXIOS.EMPLOYEE,
        ),
    },
  },
};
