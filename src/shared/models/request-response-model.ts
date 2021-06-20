import { AxiosResponse } from 'axios';

export interface ApiResponse<T> {
  messages: string[];
  status: number;
  data: T;
}

export interface RequestResponse<T> extends AxiosResponse {
  data: ApiResponse<T>;
}
