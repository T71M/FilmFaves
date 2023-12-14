import { AxiosInstance } from "axios";

export class Base {
  request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }
}
