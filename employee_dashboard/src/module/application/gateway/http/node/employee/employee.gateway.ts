import { NodeHttpGatewaySupport } from '@/module/application/support/gatewy/http/node.support';
import { ICreateEmployeeDTO } from '@/module/domain/DTO/employee/create.dto';
import { IEmployeeDTO } from '@/module/domain/DTO/employee/employee.dto';
import { IFindOneEmployeeDTO } from '@/module/domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '@/module/domain/DTO/employee/update.dto';
import { ICreateEmployeeOutputDTO } from '@/module/domain/DTO/outoput/employee/create.dto';
import { Employee } from '@/module/domain/entity/employee.entity';
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

  async findAll() {
    const response = await this._engine.get(this._url);
    const result = (await response.json()) as IEmployeeDTO[];

    return result.map(Employee.fromDTO);
  }

  async findOne({ id }: IFindOneEmployeeDTO) {
    const response = await this._engine.get(`${this._url}/${id}`);
    const result = (await response.json()) as IEmployeeDTO;

    return Employee.fromDTO(result);
  }

  async update({ id, ...DTO }: IUpdateEmployeeDTO) {
    await this._engine.patch(`${this._url}/${id}`, DTO);
  }
}
