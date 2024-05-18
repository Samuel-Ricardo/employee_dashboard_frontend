import { Container } from 'inversify';
import { GATEWAY_REGISTRY } from './gateway.registry';
import { NodeHttpEmployeeGateway } from './http/node/employee/employee.gateway';

import lazy from 'inversify-inject-decorators';
import { AxiosHttpEmployeeGateway } from './http/axios/emplpoyee/employee.gateway';

export const GATEWAY_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

GATEWAY_MODULE.bind(GATEWAY_REGISTRY.HTTP.NODE.EMPLOYEE).to(
  NodeHttpEmployeeGateway,
);

GATEWAY_MODULE.bind(GATEWAY_REGISTRY.HTTP.AXIOS.EMPLOYEE).to(
  AxiosHttpEmployeeGateway,
);

export const { lazyInject: injectGateway } = lazy(GATEWAY_MODULE);
