import { ReactNode } from 'react';

export interface ICustomLink {
	href: string;
	underlined?: boolean;
	fontFamily?: string;
	className?: string;
	children: ReactNode;
}
