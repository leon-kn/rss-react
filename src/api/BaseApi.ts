import axios, { AxiosInstance } from 'axios';
import { ApiEndpoints } from 'src/enum/ApiEndpoints';

export default class BaseApi {
  protected readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: ApiEndpoints.BaseUrl,
    });
  }
}
