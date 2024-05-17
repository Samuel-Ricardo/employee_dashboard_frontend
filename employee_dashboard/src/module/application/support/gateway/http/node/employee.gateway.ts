import { MODULE } from '../../../../../app.registry'; 
import { NodeHttpEmployeeGateway } from '../../../../gateway/http/node/employee/employee.gateway';
import { injectEngine } from '../../../../../infra/engine/engine.module';
import { injectable } from 'inversify';

@injectable()
export abstract class NodeHttpEmployeeGatewaySupport {
  @injectEngine(MODULE.APPLICATION.GATEWAY.HTTP.NODE.EMPLOYEE)
  protected readonly _gateway!: NodeHttpEmployeeGateway;
}
