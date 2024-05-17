import { Container } from 'inversify';
import { USE_CASE_REGISTRY } from './use_case.registry';
import { CreateEmployeeUseCase } from './employee/create.use_case';
import { UpdateEmployeeUseCase } from './employee/update.use_case';
import { DeleteEmployeeUseCase } from './employee/delete.use_case';
import { FindOneEmployeeUseCase } from './employee/find/one.use_case';
import { FindAllEmployeesUseCase } from './employee/find/all.use_case';

export const USE_CASE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.EMPLOYEE.CREATE).to(
  CreateEmployeeUseCase,
);

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.EMPLOYEE.UPDATE).to(
  UpdateEmployeeUseCase,
);

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.EMPLOYEE.DELETE).to(
  DeleteEmployeeUseCase,
);

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.EMPLOYEE.FIND.ONE).to(
  FindOneEmployeeUseCase,
);

USE_CASE_MODULE.bind(USE_CASE_REGISTRY.EMPLOYEE.FIND.ALL).to(
  FindAllEmployeesUseCase,
);
