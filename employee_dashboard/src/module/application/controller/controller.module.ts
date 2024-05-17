import { Container } from 'inversify';
import { CONTROLLER_REGISTRY } from './controller.registry';
import { EmployeeController } from './employee/employee.controller';
import { SERVICE_MODULE } from '../service/service.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const CONTROLLER_MODULE = Container.merge(_MODULE, SERVICE_MODULE);

CONTROLLER_MODULE.bind(CONTROLLER_REGISTRY.EMPLOYEE).to(EmployeeController);
