import { MODULE } from '@/module/app.registry';
import { ICreateEmployeeDTO } from '@/module/domain/DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '@/module/domain/DTO/employee/delete.dto';
import { IFindOneEmployeeDTO } from '@/module/domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '@/module/domain/DTO/employee/update.dto';
import { IEmployeeService } from '@/module/domain/service/employee.service';
import { inject, injectable } from 'inversify';
import { CreateEmployeeUseCase } from '../../use_case/employee/create.use_case';
import { UpdateEmployeeUseCase } from '../../use_case/employee/update.use_case';
import { DeleteEmployeeUseCase } from '../../use_case/employee/delete.use_case';
import { FindOneEmployeeUseCase } from '../../use_case/employee/find/one.use_case';
import { FindAllEmployeesUseCase } from '../../use_case/employee/find/all.use_case';

@injectable()
export class EmployeeService implements IEmployeeService {
  constructor(
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.CREATE)
    private readonly _create: CreateEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.UPDATE)
    private readonly _update: UpdateEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.DELETE)
    private readonly _delete: DeleteEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.FIND.ONE)
    private readonly _findOne: FindOneEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.FIND.ALL)
    private readonly _findAll: FindAllEmployeesUseCase,
  ) {}

  async create(DTO: ICreateEmployeeDTO) {
    return this._create.execute(DTO);
  }

  async update(DTO: IUpdateEmployeeDTO) {
    return this._update.execute(DTO);
  }

  async delete(DTO: IDeleteEmployeeDTO) {
    return this._delete.execute(DTO);
  }
  async findOne(DTO: IFindOneEmployeeDTO) {
    return this._findOne.execute(DTO);
  }
  async findAll() {
    return this._findAll.execute();
  }
}
