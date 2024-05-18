import { MODULE } from '../../../../../app.registry';
import { NodeHttpEmployeeGateway } from '../../../../gateway/http/node/employee/employee.gateway';
import { injectable } from 'inversify';
import { injectGateway } from '../../../../gateway/gateway.module';

@injectable()
export abstract class NodeHttpEmployeeGatewaySupport {
  @injectGateway(MODULE.APPLICATION.GATEWAY.HTTP.NODE.EMPLOYEE)
  protected readonly _gateway!: NodeHttpEmployeeGateway;
}
