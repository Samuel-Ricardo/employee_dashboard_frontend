import { Container } from 'inversify';
import { GATEWAY_MODULE } from './gateway/gateway.module';
import { USE_CASE_MODULE } from './support/use_case/use_case.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const APPLICATION_MODULE = Container.merge(
  _MODULE,
  GATEWAY_MODULE,
  USE_CASE_MODULE,
);
