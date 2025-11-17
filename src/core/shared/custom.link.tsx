import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ICustomLink {
	href: string;
	underlined?: boolean;
	fontFamily?: string;
	className?: string;
	children: ReactNode;
}

export const CustomLink: React.FC<ICustomLink> = ({
	underlined = false,
	fontFamily = 'inherit',
	className = '',
	href,
	children,
}) => {
	return (
		<Link
			href={href}
			className={className}
			style={{
				fontFamily,
				textDecoration: underlined ? 'underline' : '',
			}}
		>
			{children}
		</Link>
	);
};
