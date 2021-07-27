import axios from 'axios';

import { createError } from './errorHandling';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type RequestData = Record<string, unknown>;
export interface RequestParams {
  url: string;
  data?: RequestData;
  params?: RequestData;
}

export interface SendParams extends RequestParams {
  method: Method;
}

class ApiClient {
  private static axiosInstance = axios.create({
    // baseURL: process.env.BASE_URL || '',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  private static isOkStatus(status: number) {
    return status >= 200 && status < 300;
  }

  private static async sendAndHandleResponse<ResponseType>(
    requestParams: SendParams
  ): Promise<ResponseType> {
    const { url, method, data, params } = requestParams;

    try {
      const {
        status,
        data: currentData,
      } = await ApiClient.axiosInstance.request<ResponseType>({
        url,
        method,
        data,
        params,
      });

      if (!ApiClient.isOkStatus(status)) {
        createError(
          `Status response is invalid, method: ${method}, url: ${url}`
        );
      }

      return currentData as ResponseType;
    } catch (error) {
      createError(
        `Status response is invalid, method: ${method}, url: ${url}, error: "${error}"`
      );

      return {} as ResponseType;
    }
  }

  public static async get<ResponseType>(
    requestParams: RequestParams
  ): Promise<ResponseType> {
    return ApiClient.sendAndHandleResponse<ResponseType>({
      ...requestParams,
      method: Method.GET,
    });
  }

  public static post<ResponseType>(
    requestParams: RequestParams
  ): Promise<ResponseType> {
    return ApiClient.sendAndHandleResponse<ResponseType>({
      ...requestParams,
      method: Method.POST,
    });
  }

  public static put<ResponseType>(
    requestParams: RequestParams
  ): Promise<ResponseType> {
    return ApiClient.sendAndHandleResponse<ResponseType>({
      ...requestParams,
      method: Method.PUT,
    });
  }

  public static delete<ResponseType>(
    requestParams: RequestParams
  ): Promise<ResponseType> {
    return ApiClient.sendAndHandleResponse<ResponseType>({
      ...requestParams,
      method: Method.DELETE,
    });
  }
}

export default ApiClient;
