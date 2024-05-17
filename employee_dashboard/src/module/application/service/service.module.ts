import { Container } from 'inversify';
import { USE_CASE_MODULE } from '../use_case/use_case.module';
import { SERVICE_REGISTRY } from './service.registry';
import { EmployeeService } from './employee/employee.service';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const SERVICE_MODULE = Container.merge(_MODULE, USE_CASE_MODULE);

SERVICE_MODULE.bind(SERVICE_REGISTRY.EMPLOYEE).to(EmployeeService);
