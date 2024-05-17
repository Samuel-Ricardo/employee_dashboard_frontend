import { Container } from 'inversify';
import { GATEWAY_REGISTRY } from './gateway.registry';
import { NodeHttpEmployeeGateway } from './http/node/employee/employee.gateway';

import lazy from 'inversify-inject-decorators';

export const GATEWAY_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

GATEWAY_MODULE.bind(GATEWAY_REGISTRY.HTTP.NODE.EMPLOYEE).to(
  NodeHttpEmployeeGateway,
);

export const { lazyInject: injectGateway } = lazy(GATEWAY_MODULE);
