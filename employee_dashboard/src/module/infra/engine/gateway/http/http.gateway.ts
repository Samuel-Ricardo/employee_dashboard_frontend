export interface HTTPGateway {
  get<T>(url: string): Promise<T>;

  post<B, T>(url: string, body: B): Promise<T>;

  put<B, T>(url: string, body: B): Promise<T>;

  delete<T>(url: string): Promise<T>;

  patch<B, T>(url: string, body: B): Promise<T>;
}
