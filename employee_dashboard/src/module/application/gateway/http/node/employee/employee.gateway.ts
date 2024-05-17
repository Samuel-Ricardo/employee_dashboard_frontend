import { NodeHttpGatewaySupport } from "@/module/application/support/gatewy/http/node.support";
import { IEmployeeGateway } from "@/module/domain/gateway/employee.gateway";
import { injectable } from "inversify";

@injectable()
export class NodeHttpEmployeeGateway implements IEmployeeGateway extends NodeHttpGatewaySupport {



}
