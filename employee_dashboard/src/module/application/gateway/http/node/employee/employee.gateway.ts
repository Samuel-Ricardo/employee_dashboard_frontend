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
import { MODULE } from '../../../../../app.registry';
import { injectConfig } from '../../../../../infra/config/config.module';
import { ENV } from '../../../../../infra/config/env/env.config';

@injectable()
export class NodeHttpEmployeeGateway
  extends NodeHttpGatewaySupport
  implements IEmployeeGateway
{
  @injectConfig(MODULE.INFRA.CONFIG.API.URL)
  private readonly API_URL: string = ENV.API.URL;

  private readonly _url = `${this.API_URL}/api/employees`;

  async create(DTO: ICreateEmployeeDTO) {
    const response = await this._engine.post(this._url, DTO);
    const employee = (await response?.json()).result;

    return employee as ICreateEmployeeOutputDTO;
  }

  async findAll() {
    const response = await this._engine.get(this._url);
    const employee = (await response?.json()).result as IEmployeeDTO[];

    return employee.map(Employee.fromDTO);
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
