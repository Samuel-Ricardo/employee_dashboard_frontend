import { CONTROLLER_FACTORY } from './controller/controller.factory';
import { GATEWAY_FACTORY } from './gateway/gateway.factory';
import { SERVICE_FACTORY } from './service/service.factory';
import { USE_CASE_FACTORY } from './use_case/use_case.factory';
import { VALIDATION_FACTORY } from './validation/validation.factory';

export const APPLICATION_FACTORY = {
  HTTP: GATEWAY_FACTORY,
  USE_CASE: USE_CASE_FACTORY,
  SERVICE: SERVICE_FACTORY,
  CONTROLLER: CONTROLLER_FACTORY,
  VALIDAITON: VALIDATION_FACTORY,
};
