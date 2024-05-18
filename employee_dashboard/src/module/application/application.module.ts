import { Container } from 'inversify';
import { GATEWAY_MODULE } from './gateway/gateway.module';
import { USE_CASE_MODULE } from './use_case/use_case.module';
import { SERVICE_MODULE } from './service/service.module';
import { CONTROLLER_MODULE } from './controller/controller.module';
import { VALIDATION_MODULE } from './validation/validation.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const APPLICATION_MODULE = Container.merge(
  _MODULE,
  GATEWAY_MODULE,
  USE_CASE_MODULE,
  SERVICE_MODULE,
  CONTROLLER_MODULE,
  VALIDATION_MODULE,
);
