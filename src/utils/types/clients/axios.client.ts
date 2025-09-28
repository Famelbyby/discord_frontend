export interface AxiosClientResponse<T> {
	status: number;
	data: T;
	error?: string;
}
