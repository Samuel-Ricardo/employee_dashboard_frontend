import { injectable } from 'inversify';
import { injectGateway } from '../../../../gateway/gateway.module';
import { MODULE } from '../../../../../app.registry';
import { AxiosHttpEmployeeGateway } from '../../../../gateway/http/axios/emplpoyee/employee.gateway';

@injectable()
export abstract class AxiosHttpEmployeeGatewaySupport {
  @injectGateway(MODULE.APPLICATION.GATEWAY.HTTP.AXIOS.EMPLOYEE)
  protected readonly _gateway!: AxiosHttpEmployeeGateway;
}
