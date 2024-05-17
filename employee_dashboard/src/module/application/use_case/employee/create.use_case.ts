import { NodeHttpEmployeeGatewaySupport } from '../../support/gateway/http/node/employee.gateway';
import { ICreateEmployeeDTO } from '@/module/domain/DTO/employee/create.dto';
import { injectable } from 'inversify';

@injectable()
export class CreateEmployeeUseCase extends NodeHttpEmployeeGatewaySupport {
  async execute(DTO: ICreateEmployeeDTO) {
    return await this._gateway.create(DTO);
  }
}