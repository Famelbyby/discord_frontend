import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../constants/shared/URLs/api.urls';
import { AxiosClientResponse } from '../types/clients/axios.client';
import { SERVER_ERROR } from '../constants/shared/api.codes';

type MethodType = 'get' | 'post' | 'delete' | 'put';

function RestructureResponse(resp: AxiosResponse) {
	return {
		status: resp.status,
		data: resp.data,
	} as AxiosClientResponse;
}

class _AxiosClient {
	private baseUrl: string;

	constructor(url: string) {
		this.baseUrl = url;
	}

	private async method(
		type: MethodType,
		url: string,
		data?: any
	): Promise<AxiosClientResponse> {
		try {
			switch (type) {
				case 'get':
					return RestructureResponse(
						await axios.get(this.baseUrl + url, {
							withCredentials: true,
						})
					);
				case 'post':
					return RestructureResponse(
						await axios.post(this.baseUrl + url, data, {
							withCredentials: true,
						})
					);
				case 'put':
					return RestructureResponse(
						await axios.put(this.baseUrl + url, data, {
							withCredentials: true,
						})
					);
				case 'delete':
					return RestructureResponse(
						await axios.delete(this.baseUrl + url, {
							withCredentials: true,
						})
					);
			}
		} catch (error: any) {
			error = error as AxiosError;

			return {
				status: error.status | SERVER_ERROR,
				data: undefined,
				error: error.message,
			} as AxiosClientResponse;
		}
	}

	get(url: string) {
		return this.method('get', url);
	}

	post(url: string, data: any) {
		return this.method('post', url, data);
	}

	put(url: string, data: any) {
		return this.method('put', url, data);
	}

	delete(url: string) {
		return this.method('delete', url);
	}
}

const AxiosClient = new _AxiosClient(API_URL);

export default AxiosClient;
