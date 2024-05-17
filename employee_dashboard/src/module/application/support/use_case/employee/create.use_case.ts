import { NodeHttpEmployeeGateway } from '@/module/application/gateway/http/node/employee/employee.gateway';
import { NodeHttpEmployeeGatewaySupport } from '../../gateway/http/node/employee.gateway';
import { ICreateEmployeeDTO } from '@/module/domain/DTO/employee/create.dto';

export class CreateEmployeeUseCase extends NodeHttpEmployeeGatewaySupport {
  async execture(DTO: ICreateEmployeeDTO) {
    return await this._gateway.create(DTO);
  }
}
