import { Container } from 'inversify';
import { VALIDATION_REGISTRY } from './validation.registry';
import { CREATE_EMPLOYEE_FORM_SCHEMA } from './zod/form/employee/create.validation';
import { UPDATE_EMPLOYEE_FORM_SCHEMA } from './zod/form/employee/update.validation';

export const VALIDATION_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

VALIDATION_MODULE.bind(
  VALIDATION_REGISTRY.ZOD.FORM.EMPLOYEE.CREATE,
).toConstantValue(CREATE_EMPLOYEE_FORM_SCHEMA);

VALIDATION_MODULE.bind(
  VALIDATION_REGISTRY.ZOD.FORM.EMPLOYEE.UPDATE,
).toConstantValue(UPDATE_EMPLOYEE_FORM_SCHEMA);
