import { VALIDATION_MODULE } from './validation.module';
import { VALIDATION_REGISTRY } from './validation.registry';
import { CREATE_EMPLOYEE_FORM_SCHEMA } from './zod/form/employee/create.validation';
import { UPDATE_EMPLOYEE_FORM_SCHEMA } from './zod/form/employee/update.validation';

export const VALIDATION_FACTORY = {
  ZOD: {
    FORM: {
      EMPLOYEE: {
        CREATE: () =>
          VALIDATION_MODULE.get<typeof CREATE_EMPLOYEE_FORM_SCHEMA>(
            VALIDATION_REGISTRY.ZOD.FORM.EMPLOYEE.CREATE,
          ),

        UPDATE: () =>
          VALIDATION_MODULE.get<typeof UPDATE_EMPLOYEE_FORM_SCHEMA>(
            VALIDATION_REGISTRY.ZOD.FORM.EMPLOYEE.UPDATE,
          ),
      },
    },
  },
};
