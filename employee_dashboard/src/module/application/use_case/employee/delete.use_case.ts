import { injectable } from 'inversify';
import { NodeHttpEmployeeGatewaySupport } from '../../support/gateway/http/node/employee.gateway';
import { IDeleteEmployeeDTO } from '../../../domain/DTO/employee/delete.dto';

@injectable()
export class DeleteEmployeeUseCase extends NodeHttpEmployeeGatewaySupport {
  async execute(DTO: IDeleteEmployeeDTO) {
    return await this._gateway.delete(DTO);
  }
}
