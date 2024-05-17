import { NodeHttpGatewaySupport } from '@/module/application/support/gatewy/http/node.support';
import { ICreateEmployeeDTO } from '@/module/domain/DTO/employee/create.dto';
import { ICreateEmployeeOutputDTO } from '@/module/domain/DTO/outoput/employee/create.dto';
import { IEmployeeGateway } from '@/module/domain/gateway/employee.gateway';
import { injectable } from 'inversify';

@injectable()
export class NodeHttpEmployeeGateway
  extends NodeHttpGatewaySupport
  implements IEmployeeGateway
{
  private readonly _url = 'http://api:3000/api/employees';

  async create(DTO: ICreateEmployeeDTO) {
    const response = await this._engine.post(this._url, DTO);
    const result = await response.json();

    console.log({ result });

    return result as ICreateEmployeeOutputDTO;
  }
}
