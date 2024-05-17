import { IEmployeeService } from '../../domain/service/employee.service'; 
import { SERVICE_MODULE } from './service.module';
import { SERVICE_REGISTRY } from './service.registry';

export const SERVICE_FACTORY = {
  EMPLOYEE: {
    SERVICE: () =>
      SERVICE_MODULE.get<IEmployeeService>(SERVICE_REGISTRY.EMPLOYEE),
  },
};
