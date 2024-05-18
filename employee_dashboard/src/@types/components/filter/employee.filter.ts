import { IEmployeeDTO } from '../../../module/domain/DTO/employee/employee.dto';
import { IEmployeeTableItem } from '../table/employee/item/item.type';

export interface IEmployeeFilterProps {
  employees: IEmployeeDTO[];
}
