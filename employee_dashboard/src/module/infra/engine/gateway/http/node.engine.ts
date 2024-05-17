import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { HTTPGateway } from './http.gateway';

export class HttpNodeEngine implements HTTPGateway<RequestInit, Response> {
  private _defaultConfig(url: string): RequestInit {
    return {
      next: { revalidate: 10, tags: [url] },
    };
  }

  async get(url: string, config?: RequestInit) {
    return await fetch(url, {
      ...this._defaultConfig(url),
      ...config,
    });
  }
}
