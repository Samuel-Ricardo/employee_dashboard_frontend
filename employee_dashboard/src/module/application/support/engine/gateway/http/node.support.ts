import { MODULE } from '../../../../../app.registry';
import { injectEngine } from '../../../../../infra/engine/engine.module';
import { HttpNodeEngine } from '../../../../../infra/engine/gateway/http/node.engine';
import { injectable } from 'inversify';

@injectable()
export abstract class NodeHttpGatewaySupport {
  @injectEngine(MODULE.INFRA.ENGINE.GATEWAY.HTTP.NODE)
  protected readonly _engine!: HttpNodeEngine;
}
