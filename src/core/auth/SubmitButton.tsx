import React from 'react';
import { ISubmitButtonProps } from '@/src/utils/types/auth';

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
	isLoading,
	loadingText,
	defaultText,
}) => {
	return (
		<button
			type="submit"
			disabled={isLoading}
			className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
		>
			{isLoading ? loadingText : defaultText}
		</button>
	);
};
