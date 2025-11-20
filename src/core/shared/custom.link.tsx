import { ICustomLink } from '@/src/utils/types/shared/custom.link';
import Link from 'next/link';
import React from 'react';

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
