import { IUpdateEmployeeDTO } from '../../../domain/DTO/employee/update.dto';
import { NodeHttpEmployeeGatewaySupport } from '../../support/gateway/http/node/employee.gateway';
import { injectable } from 'inversify';

@injectable()
export class UpdateEmployeeUseCase extends NodeHttpEmployeeGatewaySupport {
  async execute(DTO: IUpdateEmployeeDTO) {
    return await this._gateway.update(DTO);
  }
}
