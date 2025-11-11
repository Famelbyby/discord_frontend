export type OptionalConverter<T> = {
	[Property in keyof T]?: T[Property];
};
