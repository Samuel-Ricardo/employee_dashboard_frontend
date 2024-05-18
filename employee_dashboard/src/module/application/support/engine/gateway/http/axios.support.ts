import { injectable } from 'inversify';
import { MODULE } from '../../../../../app.registry';
import { injectEngine } from '../../../../../infra/engine/engine.module';
import { AxiosHttpGateway } from '../../../../../infra/engine/gateway/http/axios.gateway';

@injectable()
export abstract class AxiosHttpGatewaySupport {
  @injectEngine(MODULE.INFRA.ENGINE.GATEWAY.HTTP.AXIOS)
  protected readonly _engine!: AxiosHttpGateway;
}
