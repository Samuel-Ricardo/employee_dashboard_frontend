import { Container } from 'inversify';
import { ENGINE_REGISTRY } from './engine.registry';
import { HttpNodeEngine } from './gateway/http/node.engine';

import lazy from 'inversify-inject-decorators';
import { AxiosHttpGateway } from './gateway/http/axios.gateway';

export const ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ENGINE_MODULE.bind(ENGINE_REGISTRY.GATEWAY.HTTP.NODE).to(HttpNodeEngine);
ENGINE_MODULE.bind(ENGINE_REGISTRY.GATEWAY.HTTP.AXIOS).to(AxiosHttpGateway);

export const { lazyInject: injectEngine } = lazy(ENGINE_MODULE);
