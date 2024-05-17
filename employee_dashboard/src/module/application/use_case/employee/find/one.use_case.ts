import { injectable } from 'inversify';
import { NodeHttpEmployeeGatewaySupport } from '../../../support/gateway/http/node/employee.gateway';
import { IFindOneEmployeeDTO } from '../../../../domain/DTO/employee/find/one.dto'; 

@injectable()
export class FindOneEmployeeUseCase extends NodeHttpEmployeeGatewaySupport {
  async execute(DTO: IFindOneEmployeeDTO) {
    return await this._gateway.findOne(DTO);
  }
}
