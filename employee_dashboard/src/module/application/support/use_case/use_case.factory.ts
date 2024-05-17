import { CreateEmployeeUseCase } from './employee/create.use_case';
import { DeleteEmployeeUseCase } from './employee/delete.use_case';
import { FindOneEmployeeUseCase } from './employee/find/one.use_case';
import { UpdateEmployeeUseCase } from './employee/update.use_case';
import { USE_CASE_MODULE } from './use_case.module';
import { USE_CASE_REGISTRY } from './use_case.registry';

export const USE_CASE_FACTORY = {
  EMPLOYEE: {
    CREATE: () =>
      USE_CASE_MODULE.get<CreateEmployeeUseCase>(
        USE_CASE_REGISTRY.EMPLOYEE.CREATE,
      ),
    UPDATE: () =>
      USE_CASE_MODULE.get<UpdateEmployeeUseCase>(
        USE_CASE_REGISTRY.EMPLOYEE.UPDATE,
      ),
    DELETE: () =>
      USE_CASE_MODULE.get<DeleteEmployeeUseCase>(
        USE_CASE_REGISTRY.EMPLOYEE.DELETE,
      ),
    FIND: {
      ONE: () =>
        USE_CASE_MODULE.get<FindOneEmployeeUseCase>(
          USE_CASE_REGISTRY.EMPLOYEE.FIND.ONE,
        ),
      ALL: () =>
        USE_CASE_MODULE.get<FindOneEmployeeUseCase>(
          USE_CASE_REGISTRY.EMPLOYEE.FIND.ALL,
        ),
    },
  },
};
