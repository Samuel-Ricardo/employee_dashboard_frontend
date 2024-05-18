import { NodeHttpGatewaySupport } from '../../../../support/engine/gateway/http/node.support';
import { ICreateEmployeeDTO } from '../../../../../domain/DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '../../../../../domain/DTO/employee/delete.dto';
import { IEmployeeDTO } from '../../../../../domain/DTO/employee/employee.dto';
import { IFindOneEmployeeDTO } from '../../../../../domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '../../../../../domain/DTO/employee/update.dto';
import { ICreateEmployeeOutputDTO } from '../../../../../domain/DTO/outoput/employee/create.dto';
import { Employee } from '../../../../../domain/entity/employee.entity';
import { IEmployeeGateway } from '../../../../../domain/gateway/employee.gateway';
import { injectable } from 'inversify';

@injectable()
export class NodeHttpEmployeeGateway
  extends NodeHttpGatewaySupport
  implements IEmployeeGateway
{
  private readonly _url =
    'https://employee-dashboard-backend-main.onrender.com/api/employees';

  async create(DTO: ICreateEmployeeDTO) {
    console.log({ DTO });
    const response = await this._engine.post(this._url, DTO);
    const responseadomamamia = (await response?.json()).result;

    console.log({ responseadomamamia });

    return responseadomamamia as ICreateEmployeeOutputDTO;
  }

  async findAll() {
    const response = await this._engine.get(this._url);
    const responseadomamamia = (await response?.json())
      .result as IEmployeeDTO[];

    console.log({ responseadomamamia });

    return responseadomamamia.map(Employee.fromDTO);
  }

  async findOne({ id }: IFindOneEmployeeDTO) {
    const response = await this._engine.get(`${this._url}/${id}`);
    const result = (await response?.json()).result as IEmployeeDTO;

    return Employee.fromDTO(result);
  }

  async update({ id, ...DTO }: IUpdateEmployeeDTO) {
    await this._engine.put(`${this._url}/${id}`, DTO);
  }

  async delete({ id }: IDeleteEmployeeDTO) {
    await this._engine.delete(`${this._url}/${id}`);
  }
}
