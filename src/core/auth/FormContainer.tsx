import React from 'react';
import { FormContainerProps } from '@/src/utils/types/auth';

export const FormContainer: React.FC<FormContainerProps> = ({
	title,
	subtitle,
	children,
}) => {
	return (
		<div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-[#101828] min-h-screen">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
					alt="Your Company"
					className="mx-auto h-10 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
					{subtitle}
				</p>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				{children}
			</div>
		</div>
	);
};
