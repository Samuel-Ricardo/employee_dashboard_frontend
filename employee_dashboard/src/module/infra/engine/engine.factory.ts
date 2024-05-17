import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';
import { HttpNodeEngine } from './gateway/http/node.engine';

export const ENGINE_FACTORY = {
  GATEWAY: {
    HTTP: {
      NODE: () =>
        ENGINE_MODULE.get<HttpNodeEngine>(ENGINE_REGISTRY.GATEWAY.HTTP.NODE),
    },
  },
};
