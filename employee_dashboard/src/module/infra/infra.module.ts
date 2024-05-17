import { Container } from 'inversify';
import { ENGINE_MODULE } from './engine/engine.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const INFRA_MODULE = Container.merge(_MODULE, ENGINE_MODULE);
