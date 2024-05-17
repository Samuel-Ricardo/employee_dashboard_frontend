export abstract class NodeHttpEmployeeGatewaySupport {
  @injectEngine(MODULE.INFRA.ENGINE.GATEWAY.HTTP.NODE)
  protected readonly _engine!: HttpNodeEngine;
}
