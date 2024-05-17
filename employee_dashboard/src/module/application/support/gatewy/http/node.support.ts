import { MODULE } from '@/module/app.registry';
import { injectEngine } from '@/module/infra/engine/engine.module';
import { HttpNodeEngine } from '@/module/infra/engine/gateway/http/node.engine';
import { injectable } from 'inversify';

@injectable()
export abstract class NodeHttpGatewaySupport {
  @injectEngine(MODULE.INFRA.ENGINE.GATEWAY.HTTP.NODE)
  protected readonly _engine!: HttpNodeEngine;
}
