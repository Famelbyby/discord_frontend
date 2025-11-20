import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../constants/shared/URLs/api.urls';
import { AxiosClientResponse } from '../types/clients/axios.client';
import { CODE_SERVER } from '../constants/shared/api.codes';

type MethodType = 'get' | 'post' | 'delete' | 'put';

function RestructureResponse<T>(resp: AxiosResponse) {
	return <AxiosClientResponse<T>>{
		status: resp.status,
		data: resp.data,
	};
}

class _AxiosClient {
	private baseUrl: string;

	constructor(url: string) {
		this.baseUrl = url;
	}

	private async method<T, G = unknown>(
		type: MethodType,
		url: string,
		data?: G
	): Promise<AxiosClientResponse<T>> {
		try {
			switch (type) {
				case 'get':
					return RestructureResponse<T>(
						await axios.get(this.baseUrl + url, {
							withCredentials: true,
						})
					);
				case 'post':
					return RestructureResponse<T>(
						await axios.post(this.baseUrl + url, data, {
							withCredentials: true,
						})
					);
				case 'put':
					return RestructureResponse<T>(
						await axios.put(this.baseUrl + url, data, {
							withCredentials: true,
						})
					);
				case 'delete':
					return RestructureResponse<T>(
						await axios.delete(this.baseUrl + url, {
							withCredentials: true,
						})
					);
			}
		} catch (error: any) {
			error = error as AxiosError;

			return <AxiosClientResponse<T>>{
				status: error.status | CODE_SERVER,
				data: undefined,
				error: error.message,
			};
		}
	}

	/**
	 * GET-запрос
	 *
	 * @template T - тип возвращаемой data
	 * @param url - URL ручки
	 * @returns
	 */
	get<T>(url: string) {
		return this.method<T>('get', url);
	}

	/**
	 * POST-запрос
	 *
	 * @template T - тип возвращаемой data
	 * @template G - тип передаваемой data
	 * @param url - URL ручки
	 * @param data - data для тела запроса
	 * @returns
	 */
	post<T, G>(url: string, data: G) {
		return this.method<T>('post', url, data);
	}

	/**
	 * PUT-запрос
	 *
	 * @template T - тип возвращаемой data
	 * @template G - тип передаваемой data
	 * @param url - URL ручки
	 * @param data - data для тела запроса
	 * @returns
	 */
	put<T, G>(url: string, data: G) {
		return this.method<T>('put', url, data);
	}

	/**
	 * DELETE-запрос
	 *
	 * @template T - тип возвращаемой data
	 * @param url - URL ручки
	 * @returns
	 */
	delete<T>(url: string) {
		return this.method<T>('delete', url);
	}
}

const AxiosClient = new _AxiosClient(API_URL);

export default AxiosClient;
