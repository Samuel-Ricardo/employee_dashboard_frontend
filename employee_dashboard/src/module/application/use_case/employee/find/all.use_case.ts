import { injectable } from 'inversify';
import { NodeHttpEmployeeGatewaySupport } from '../../../support/gateway/http/node/employee.gateway';

@injectable()
export class FindAllEmployeesUseCase extends NodeHttpEmployeeGatewaySupport {
  async execute() {
    return await this._gateway.findAll();
  }
}
