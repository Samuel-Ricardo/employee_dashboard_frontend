import { injectable } from 'inversify';
import { NodeHttpEmployeeGatewaySupport } from '@/module/application/support/gateway/http/node/employee.gateway';

@injectable()
export class FindAllEmployeesUseCase extends NodeHttpEmployeeGatewaySupport {
  async execute() {
    return await this._gateway.findAll();
  }
}
