import { ICreateEmployeeDTO } from '@/module/domain/DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '@/module/domain/DTO/employee/delete.dto';
import { IFindOneEmployeeDTO } from '@/module/domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '@/module/domain/DTO/employee/update.dto';
import { ICreateEmployeeOutputDTO } from '@/module/domain/DTO/outoput/employee/create.dto';
import { Employee } from '@/module/domain/entity/employee.entity';
import { IEmployeeService } from '@/module/domain/service/employee.service';
import { injectable } from 'inversify';

@injectable()
export class EmployeeService implements IEmployeeService {
  create(DTO: ICreateEmployeeDTO): Promise<ICreateEmployeeOutputDTO> {
    throw new Error('Method not implemented.');
  }
  update(DTO: IUpdateEmployeeDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(DTO: IDeleteEmployeeDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findOne(DTO: IFindOneEmployeeDTO): Promise<Employee> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Employee[]> {
    throw new Error('Method not implemented.');
  }
}
