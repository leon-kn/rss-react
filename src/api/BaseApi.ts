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

// Access token: c93bdcd2-f64b-40ea-b784-0ccd0c3e53b3
