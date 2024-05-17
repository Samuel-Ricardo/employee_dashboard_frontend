export interface IHTTPGateway<C, R> {
  get(url: string, config?: C): Promise<R>;

  post<B>(url: string, body: B, config?: C): Promise<R>;

  put<B>(url: string, body: B, config?: C): Promise<R>;

  delete(url: string, config?: C): Promise<R>;

  patch<B>(url: string, body: B, config?: C): Promise<R>;
}
