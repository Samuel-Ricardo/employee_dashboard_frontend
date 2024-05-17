import { ICreateEmployeeDTO } from '../DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '../DTO/employee/delete.dto';
import { IFindOneEmployeeDTO } from '../DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '../DTO/employee/update.dto';
import { ICreateEmployeeOutputDTO } from '../DTO/outoput/employee/create.dto';
import { Employee } from '../entity/employee.entity';

export interface IEmployeeService {
  create(DTO: ICreateEmployeeDTO): Promise<ICreateEmployeeOutputDTO>;
  update(DTO: IUpdateEmployeeDTO): Promise<void>;
  delete(DTO: IDeleteEmployeeDTO): Promise<void>;
  findOne(DTO: IFindOneEmployeeDTO): Promise<Employee>;
  findAll(): Promise<Employee[]>;
}
