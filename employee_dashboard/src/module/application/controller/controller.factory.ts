import { CONTROLLER_MODULE } from './controller.module';
import { CONTROLLER_REGISTRY } from './controller.registry';
import { EmployeeController } from './employee/employee.controller';

export const CONTROLLER_FACTORY = {
  EMPLOYEE: () =>
    CONTROLLER_MODULE.get<EmployeeController>(CONTROLLER_REGISTRY.EMPLOYEE),
};
