import { IUpdateEmployeeDTO } from '@/module/domain/DTO/employee/update.dto';
import { NodeHttpEmployeeGatewaySupport } from '../../gateway/http/node/employee.gateway';
import { injectable } from 'inversify';

@injectable()
export class UpdateEmployeeUseCase extends NodeHttpEmployeeGatewaySupport {
  async execture(DTO: IUpdateEmployeeDTO) {
    return await this._gateway.update(DTO);
  }
}
