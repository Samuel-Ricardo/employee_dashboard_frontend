import { Container } from 'inversify';
import { GATEWAY_MODULE } from './gateway/gateway.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const APPLICATION_MODULE = Container.merge(_MODULE, GATEWAY_MODULE);
