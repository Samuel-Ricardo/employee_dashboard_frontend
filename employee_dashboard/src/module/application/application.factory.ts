import { GATEWAY_FACTORY } from './gateway/gateway.factory';
import { USE_CASE_FACTORY } from './support/use_case/use_case.factory';

export const APPLICATION_FACTORY = {
  HTTP: GATEWAY_FACTORY,
  USE_CASE: USE_CASE_FACTORY,
};
