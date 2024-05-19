import { injectable } from 'inversify';
import { IEmployeeGateway } from '../../../../../domain/gateway/employee.gateway';
import { AxiosHttpGatewaySupport } from '../../../../support/engine/gateway/http/axios.support';
import { ICreateEmployeeDTO } from '../../../../../domain/DTO/employee/create.dto';
import { ICreateEmployeeOutputDTO } from '../../../../../domain/DTO/outoput/employee/create.dto';
import { Employee } from '../../../../../domain/entity/employee.entity';
import { IEmployeeDTO } from '../../../../../domain/DTO/employee/employee.dto';
import { IFindOneEmployeeDTO } from '../../../../../domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '../../../../../domain/DTO/employee/update.dto';
import { IDeleteEmployeeDTO } from '../../../../../domain/DTO/employee/delete.dto';

@injectable()
export class AxiosHttpEmployeeGateway
  extends AxiosHttpGatewaySupport
  implements IEmployeeGateway
{
  private readonly _url =
    'https://employee-dashboard-backend-main.onrender.com/api/employees';

  async create(DTO: ICreateEmployeeDTO) {
    const response = await this._engine.post(this._url, DTO);
    const employee = await response.data.result;

    return { id: employee.id } as ICreateEmployeeOutputDTO;
  }

  async findAll() {
    const response = await this._engine.get(this._url);
    const employee = (await response.data.result) as IEmployeeDTO[];

    return employee.map(Employee.fromDTO);
  }

  async findOne({ id }: IFindOneEmployeeDTO) {
    const response = await this._engine.get(`${this._url}/${id}`);
    const result = (await response.data.result) as IEmployeeDTO;

    return Employee.fromDTO(result);
  }

  async update({ id, ...DTO }: IUpdateEmployeeDTO) {
    await this._engine.patch(`${this._url}/${id}`, DTO);
  }

  async delete({ id }: IDeleteEmployeeDTO) {
    await this._engine.delete(`${this._url}/${id}`);
  }
}
