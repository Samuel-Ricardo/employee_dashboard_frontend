import { MODULE } from '@/module/app.registry';
import { ICreateEmployeeDTO } from '@/module/domain/DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '@/module/domain/DTO/employee/delete.dto';
import { IFindOneEmployeeDTO } from '@/module/domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '@/module/domain/DTO/employee/update.dto';
import { type IEmployeeService } from '@/module/domain/service/employee.service';
import { inject, injectable } from 'inversify';

@injectable()
export class EmployeeController {
  constructor(
    @inject(MODULE.APPLICATION.SERVICE.EMPLOYEE)
    private readonly _service: IEmployeeService,
  ) {}

  async create(DTO: ICreateEmployeeDTO) {
    const result = await this._service.create(DTO);
    return { result };
  }

  async update(DTO: IUpdateEmployeeDTO) {
    await this._service.update(DTO);
  }

  async delete(DTO: IDeleteEmployeeDTO) {
    await this._service.delete(DTO);
  }

  async findOne(DTO: IFindOneEmployeeDTO) {
    const result = await this._service.findOne(DTO);
    return { result: result.toDTO() };
  }

  async findAll() {
    const result = await this._service.findAll();
    return { result: result.map(employee => employee.toDTO()) };
  }
}
