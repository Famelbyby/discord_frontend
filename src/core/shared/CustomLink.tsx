import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ICustomLink {
	href: string;
	color?: string;
	underlined?: boolean;
	fontFamily?: string;
	children: ReactNode;
}

export const CustomLink: React.FC<ICustomLink> = ({
	underlined = false,
	fontFamily = 'inherit',
	color = 'inherit',
	href,
	children,
}) => {
	return (
		<Link
			href={href}
			style={{
				color,
				fontFamily,
				textDecoration: underlined ? 'underline' : '',
			}}
		>
			{children}
		</Link>
	);
};
